# Library feature set, owner decisions 2026-07-28

Three features commissioned by the owner, decided one at a time. The code lives
in the **app repo** (`/root/Projects/prestige-intelligence/web`); this file is the
decision record, kept here because `CLAUDE.md`'s presentation section is the
normative description of that renderer.

---

## FE-D0. The freeze, and why these are authorised

`CLAUDE.md` freezes the presentation: *"do NOT change the visual style, layout,
colours, spacing, typography, or flowchart look in EITHER repo without an
explicit, in-session owner instruction."*

A search box and a per-item report control **are** changes to that surface. The
owner's request on 2026-07-28 is exactly the explicit in-session instruction the
freeze requires, so they are authorised — but the authorisation is **narrow**:

- new controls are built in the **existing** visual language (the kind palette of
  `library-kinds.ts`, the chip shapes of `badges.tsx`, the card treatment of
  `group.tsx`); nothing existing is restyled to accommodate them;
- **sky and fuchsia stay reserved** — sky is the forward-reference accent,
  fuchsia the ‡ tier. Neither may be spent on a search box or a form;
- the five fixed-numbered page sections, the flowchart, the verification caption
  and the provenance pill are untouched.

`CLAUDE.md`'s list of files implementing the approved style is updated in the
same commit as the code, per the standing rule.

---

## FE-D1. Performance: cache server-side AND hydrate client-side

**Owner chose both halves.** The diagnosis in the request was that pages are slow
because rendering happens on the VPS. Measured, the actual cause is different and
worth recording so it is not re-diagnosed:

> All four library routes carry `export const dynamic = "force-dynamic"`, and
> `loadItems()` in `web/lib/math-library.ts` has **no memoisation**. So every
> single page view re-reads and re-parses **all 1,204 items — 6.5 MB, ~50 ms of
> pure CPU** — then rebuilds the dependency graph and runs KaTeX, for content
> that changes only when a level is published.

Measured cold 60 ms, warm 50/51 ms, on this hardware, parse only.

**Server half (this is the part that fixes the slowness).** Memoise the corpus
load and drop `force-dynamic` so pages are generated and revalidated rather than
rebuilt per request. The content is a read-only bind mount, so a publish is the
only invalidation event.

**Client half (this is the part that makes navigation instant).** Hydrate so
in-page navigation between items does not round-trip. Cost, stated plainly:
~280 KB of KaTeX JS and fonts.

**SEO is preserved because the server half stays.** HTML still carries the
mathematics, so the theorems remain indexable — that would have been lost had
rendering moved to the client outright, which is the main reason the pure
client-side option was argued against.

---

## FE-D2. Search: client-side index, titles + home page, ~40 KB gzipped

Index `{id, de-TeXed title, kind, home page}` for the **998 published** items.
153 KB raw, **40 KB gzipped**. Ships with the page; every keystroke searches
locally with no round trip.

Two constraints that are correctness issues, not preferences:

1. **Titles are LaTeX.** The index must be built through the existing
   `plainTitle()` in `web/lib/math-library.ts` — the one de-TeX for every
   plain-text context — or a user typing `sqrt` or `epsilon` will not match
   `\sqrt` or `\varepsilon`. Do not mint a second, cruder de-TeX; `CLAUDE.md`
   bans exactly that.
2. **Drafts must never ship in the public index.** 206 of the 1,204 items are
   unpublished. A client-side index containing them leaks unpublished
   mathematics to anyone who opens devtools. The public index is
   published-only; a draft index may be served **only** to the signed-in owner,
   on the same condition as the DRAFT banner.

Rejected: statement snippets (112 KB gzipped, 2.8× for body recall) and a
server-side search route (a round trip per keystroke, which fights FE-D1).

---

## FE-D3. Feedback: per-item form, Resend, with abuse controls

A "Report an issue" control on **every item**, opening a form that posts to an
API route which sends through the existing `sendEmail()` in `web/lib/email.ts`.

**Destination `support@prestige-intelligence.cc` — VERIFIED against the codebase**,
not assumed: it is the `SUPPORT_EMAIL` default at `web/lib/email.ts:30`, the
hardcoded `BULK_ENQUIRY_EMAIL` at `web/lib/pricing.ts:214`, and the address in
`SiteFooter.tsx`, `app/(app)/account/page.tsx` and all four legal documents.
The domain is verified in Resend and the sender already exists.

**Per-item, not per-page**, because this library's entire verification apparatus
is per-item. A report carrying `thm-lebesgue-criterion` is actionable; "something
is wrong on the Riemann integral page" starts a hunt through 18 items.

**Auto-attached, never typed by the reporter:** item id, kind, home page, full
URL, and the item's verification state (draft/published, judged or not). The
reporter writes only a category and a message.

**Abuse controls are part of the feature, not a follow-up.** The library is
public and **the app has no rate limiting anywhere today** — grepped, there is
none. A server-sent form without protection is an open mail relay pointed at the
support inbox. Ship with: a honeypot field, a per-IP rate limit, and a hard
length cap on the message.

---

## Build order

FE-D1's server half first — it is the actual fix for the stated problem and the
other two add client surface on top of it. Then FE-D2 and FE-D3, which are
independent of each other. FE-D1's client half can land last, since it is an
enhancement rather than a fix.
