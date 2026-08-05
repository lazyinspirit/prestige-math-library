## Item to certify (1)

### `items/def-cofinality.md`

**What was repaired, and by whom.** The "Regular and singular" paragraph opened
"An **infinite cardinal** $\kappa$ ([[def-cardinal]],
[[def-aleph-and-beth-hierarchies]]) is". DeepSeek V4 Pro, judging at A7, rejected
the item because neither cited target defines what makes a cardinal *infinite*:
`def-cardinal` defines only "cardinal", and `def-aleph-and-beth-hierarchies`
*uses* the phrase without defining it. The definition lives in
`def-cardinal-arithmetic` ("A cardinal $\kappa$ is **finite** when
$\kappa \in \omega$ and **infinite** when $\omega \subseteq \kappa$"), which was
neither cited nor in `deps`. Because "infinite cardinal" delimits the domain on
which *regular* and *singular* are defined, this was a miscitation on the
definition's own hypothesis.

Alpha (`claude-opus-5`) adjudicated that `confirmed_fatal` (dependency_citation)
at A8 round 1 and rewrote the clause, adding `def-cardinal-arithmetic` to `deps`.

**This item was already certified once**, on this same text, by an independent
GPT 5.6 Sol read-only lane (`certifier-a8-def-cofinality`, 2026-08-04). You are a
**second, independent reading under the current lineup** — do not look for that
verdict and do not try to agree with it. Read the item fresh.

**Check specifically, from disk:** open `items/def-cardinal.md`,
`items/def-cardinal-arithmetic.md` and `items/def-aleph-and-beth-hierarchies.md`
and quote what each actually states about "cardinal", "infinite cardinal" and
$\aleph_\alpha$; verify the repaired clause divides its three citations exactly,
attributing to each target only what that target states; verify
`def-cardinal-arithmetic` is a legal backward dependency for this item in the
reading order of `library/foundations/cardinal-arithmetic-and-cofinality.md`;
and verify no `deps` entry was orphaned. Then read the whole Definition and
every Remark with a numbered step's suspicion.
