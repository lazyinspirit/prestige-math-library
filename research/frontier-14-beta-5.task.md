## Batch 5 of run `frontier-14` — quadratic residues and the Legendre symbol

One A/B pair, and it is the gateway to the whole elementary number-theory band:
quadratic reciprocity, Jacobi symbols and the sums-of-squares pages all sit above
it. `research/plan-number-theory-track.md` §**NT-2** (from line ~353) gives you
an unusually complete design — a full item inventory with per-item provenance
codes and exact source locators. **Harvest against it; do not merely transcribe
it.**

| | |
|---|---|
| A page | `quadratic-residues-and-the-legendre-symbol` · order **57.003** · category `number-theory` |
| B page | `quadratic-residues-and-the-legendre-symbol-examples` · order **57.004** |
| requires | `primitive-roots-and-unit-groups-modulo-n-examples` (published — built in `frontier-13`) |
| prose scaffold | `research/plan-number-theory-track.md` §**NT-2**, from line ~353 |

**The `requires` edge points at the B page and that is intentional** — it makes
the companion *A* page `primitive-roots-and-unit-groups-modulo-n` citable, never
the examples items themselves. B pages are leaves: nothing may depend on an item
homed on an `-examples` page (`validate-plan` error `b-leaf`). Cite the A page's
items.

NT-2's design names four prerequisites — NT-1, `congruences-and-the-chinese-
remainder-theorem`, `cyclic-groups-and-direct-products`, and
`polynomial-rings-and-roots`. All four were verified at step 0 to lie inside your
declared closure, so all four are legally citable. Open each on disk.

Sources with exact locators, from the design: Hackman Ch. D §D.I "The Legendre
Symbol" pp. 107–117 and §D.IV "Gauß' Lemma" pp. 123–127 (esp. D.I.1–D.I.9,
D.IV.1–D.IV.6); Stein Ch. 4 §§4.1–4.3, PDF pp. 76–83 (esp. Defs. 4.1.1–4.1.2,
Lemma 4.1.4, Prop. 4.2.1, Cor. 4.2.3, Lemma 4.3.1); Gorodnik Lecture 9 §1
pp. 1–3. **Verify each locator by extracting text, not by fetching a 200** — the
brief has the pypdf recipe. If a locator has moved, recover it from the archive
under host variants before re-sourcing.

The load-bearing results: the power-residue criterion modulo a prime and the
root count $\gcd(r, p-1)$; the squares as an index-2 subgroup; the Legendre
symbol, its well-definedness and its multiplicativity as the unique nontrivial
homomorphism to $\{\pm 1\}$; **Euler's criterion**; the solution count
$1 + (a/p)$ and its discriminant form; **Gauss's lemma** with the signed
half-system permutation written out; and **both supplements** —
$(-1/p) = (-1)^{(p-1)/2}$ and $(2/p) = (-1)^{(p^2-1)/8}$.

**Quadratic reciprocity itself is NOT yours.** NT-2 stops at the supplements;
reciprocity is the next page. Decline it naming that page id, not "a later
page".

**Three specific traps the design flags, and they are the right ones.**

1. **The zero case is a separate exhaustive case, everywhere.** The symbol is
   defined for all integers with $(a/p) = 0$ when $p \mid a$; "quadratic residue"
   is restricted to $p \nmid a$. Euler's criterion and multiplicativity both need
   $p \mid a$ handled explicitly. This is precisely the kind of boundary that the
   previous run marked `not_applicable` on a template and thereby hid a fatal
   defect — see `research/frontier-14-PREVENTIONS.md` §A3.
2. **$(a/p)$ is never a quotient.** Say so once and never write it as one.
3. **Choice discipline.** A primitive root may be selected inside a proof of a
   theorem asserting one exists; **no family of such choices over all primes is
   formed.** The design states NT-2 is ZF and it must stay ZF.

The design also warns against duplicating published items — check
`ex-unit-group-modulo-one-hundred-decomposition` and
`ex-units-modulo-eight-are-not-cyclic` before minting anything similar, and
disposition them `already-published` in your harvest rather than silently
skipping them.
