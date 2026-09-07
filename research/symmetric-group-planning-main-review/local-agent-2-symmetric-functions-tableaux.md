# Local agent 2 — symmetric functions, tableaux, and skew-module audit

## Scope and source authentication

This is an independent, read-only audit for `/root/symmetric_scaffold`.  I
read the canonical plan/inventory and the prior reports, inspected the cached
full text below (including the relevant proof passages), checked the live
full-text URL on 2026-09-07, and searched again for the missing James--Peel
source.  I changed no canonical scaffold, plan, source cache, runtime state,
or Git state.

| field | independently checked record |
|---|---|
| counted source | I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed., Oxford Mathematical Monographs, Oxford UP, 1995: a complete textbook, not a preview or a chapter extract |
| legitimate full-text URL and status | <https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf>; `HTTP 200`, `application/pdf`, 6,276,911 downloaded bytes on 2026-09-07. Publisher bibliographic record: <https://academic.oup.com/book/52932>. |
| local full text | `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/symmetric-functions-textbook/macdonald-symmetric-functions-and-hall-polynomials-2e.pdf` |
| SHA-256 | `64e242b84d1f3b7864ed28f89a9b331269a28c1ce2a32ce03b4ee692f5974ea7` |
| full-document/end-matter validation | MuPDF reports a valid PDF-1.6 with **486 pages**; file ends `%%EOF`; the contents lists all seven chapters and both appendices; the terminal printed pp. 467--475 contain bibliography/index/end matter. This is complete-book validation, not title-page inference. |
| exact ranges actually read | Chapter I §§2--7, printed pp. 17--134, with proof passages (2.1)--(2.14), (3.1)--(3.8), (4.1)--(4.8), (5.1)--(5.17), (6.3)--(6.7), and (7.1)--(7.13)/Examples 2--3 and 20/26; I §9, pp. 142--148, (9.1)--(9.7); Appendix A §§5--8, pp. 153--168. |

The full-text check confirms the source-wide distinctions needed by the
scaffold: `Lambda` is the *graded*, degreewise stable inverse limit over
`Z`; `p_lambda` is a basis only over `Q`; Cauchy is a formal completed
bidegree identity; and the ordinary character conclusions use characteristic
zero (the Appendix takes an algebraically closed characteristic-zero field).
Macdonald's English tableau convention is weakly increasing rows and strictly
increasing columns; his LR word is read right-to-left, row-by-row from top to
bottom.

## Proof harvest and disposition

| exact source locator | proof-bearing content actually checked | canonical disposition |
|---|---|---|
| I §2, pp. 17--25, (2.1)--(2.14) | Stabilization in degree `d`, integral `m,e,h` bases/free generators, `H(t)E(-t)=1`, and the rational (not integral) power-sum basis. | SYMR-1 stable ring/bases and the integral/rational boundary are sound. Do not repeat the published finite-variable fundamental theorem. |
| I §3, pp. 40--44, (3.1)--(3.8) | Bialternant definition, Jacobi--Trudi and dual Jacobi--Trudi, and `omega(s_lambda)=s_{lambda'}`. | Supports SYMR-1 Schur/determinantal items. The Schur definition must occur before a Cauchy theorem which uses it. |
| I §4, pp. 62--65, (4.1)--(4.8) | All three Cauchy expansions; `(h_lambda,m_mu)=delta`; equivalence of Cauchy expansions and duality; `p` and `s` orthogonality. | Supports SYMR-1 Hall/Cauchy exactly, degreewise/formally. |
| I §5, pp. 69--74, (5.1), (5.4), (5.7), (5.9)--(5.17) | Hall-adjoint definition of `s_{lambda/mu}`, skew Jacobi--Trudi, containment vanishing/factorisation, split-alphabet argument, tableau expansion, and Pieri. | Supports the symmetric-function skew interface, not a classical skew-polytabloid module. |
| I §6, pp. 99--103, (6.3)--(6.7) | `K=M(s,m)`, tableau interpretation (6.4), and strict dominance-unitriangularity (6.5); the duality table gives `M(h,s)=K^t`. | The new Kostka supplier closes the Specht/Schur *label* identification once it is kept explicit. Cite (6.4)--(6.6), not (6.7) as the principal support. |
| I §7, pp. 112--117, (7.1)--(7.7), Examples 2--3 | Cycle-type formula, isometry and outer-product multiplicativity via Frobenius reciprocity, `ch(X^lambda)=s_lambda`, sign/omega, and the skew-character/restriction interface. | SYMR-2/3 characteristic arguments are source-closed over `C`/a characteristic-zero splitting field. Example 3 is a **character** statement. |
| I §7, Example 20, pp. 126--130 and (7.12) | Internal product is same-degree; `p_rho*p_sigma=delta_{rho,sigma}z_rho p_rho`. | Correct SYMR-13 interface; it supplies no positive general Kronecker rule. |
| I §7, Example 26, pp. 132--134; Appendix A §6, pp. 156--158 | Restriction coproduct interface; polynomial-functor derivation of the outer induction product. | A useful cross-check, but a Hopf proof still needs its Mackey/bialgebra-compatibility joint. |
| I §9, pp. 142--148, (9.1)--(9.7) | Complete Littlewood--Robinson proof: the reversible letter replacement (9.5), tableau preservation (9.6), decreasing-row lemma (9.7), and bijection (9.4) prove the LR count (9.2). | Independent proof check only. RL-8 retains `def-littlewood-richardson-tableau-and-coefficient` and its `GL_r` tensor theorem; SYMR-3 consumes that exact supplier/convention. |

## Canonical item/dependency audit

### SYMR-1 and SYMR-2

1. `lem-kostka-change-of-basis-is-dominance-unitriangular` is the required
   new supplier and its displayed equality is correct:
   `h_mu=sum_lambda K_{lambda,mu}s_lambda`.  In Macdonald it follows from
   `K=M(s,m)`, Hall duality, and `M(h,s)=K^t`.  Its proof route should say
   this (or prove the equivalent successive-Pieri statement), not merely
   invoke tableaux.  Give it Macdonald I (6.4)--(6.6), pp. 101--102, and
   retain its dependencies on the Hall/Schur-basis route.  `I (6.7)` is a
   later 0--1 matrix enumeration and is not the unitriangularity theorem.

2. The Kostka edge into
   `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions`
   is logically essential and correct.  Compare
   `ch(M^mu)=h_mu=sum_lambda K_{lambda,mu}s_lambda` with Young's Rule, then
   invert the finite dominance-unitriangular matrix.  An isometry plus two
   orthonormal bases would identify the labels only up to a permutation.
   Keep the character formula rational degreewise, while the restriction
   `ch:R_S -> Lambda` is integral because the `h_mu` are hit and form the
   integral basis.

3. The current table order makes the Cauchy row depend on
   `def-stable-schur-function-by-bialternants` which appears below it.  This
   is not a mathematical cycle, but the authoring/proof order should move the
   Schur definition (and preferably Jacobi--Trudi) ahead of Cauchy, or split
   the Cauchy theorem after that definition.  Retain the completion only in
   the Cauchy item; neither the Hall form nor the restriction coproduct needs
   a completion.

4. `def-skew-schur-function-by-hall-adjointness` is now properly limited to
   adjointness.  Keep containment-zero and factorisation in
   `thm-skew-jacobi-trudi-and-tableau-expansion`, exactly as Macdonald
   (5.4)/(5.7) proves them.  The latter theorem's tableau convention must be
   reconciled once with the RG/RL convention.

### SYMR-3 and LR ownership

1. RL-8 ownership is correct and must remain frozen.  SYMR-3 may prove the
   *symmetric-group* outer induction decomposition using the RL-8 LR
   coefficient, while Macdonald I §9 is its independent complete proof check;
   it must not mint another LR tableau definition or a reverse RL dependency.
   Delete/replace the two known near-duplicate LR B rows rather than retaining
   them as a second tableau exercise.

2. `def-restriction-coproduct-on-the-graded-symmetric-group-character-ring`
   belongs in the ordinary graded tensor sum (there are only `n+1` bidegrees
   in degree `n`).  Its current dependency on the sign/restriction definition
   is incidental; replace it with the ordinary restriction-of-group-modules
   supplier if that fact is not already inherited.  The displayed skewing
   formula should be read precisely as
   `Res_{S_m x S_{n-m}} S^lambda = direct-sum_{mu partition m} S^mu boxplus
   K^{lambda/mu}` over `C`, where `ch(K^{lambda/mu})=s_{lambda/mu}`.  This
   avoids pretending that Macdonald's virtual/skew character already is a
   named classical module.

3. No complete authoritative full text of James--Peel, *Specht series for
   skew representations of symmetric groups*, J. Algebra 56 (1979), 343--364,
   DOI <https://doi.org/10.1016/0021-8693(79)90342-9>, was recoverable in this
   audit.  The DOI/metadata is live, but it is not a fetched complete text.
   A search result calling a third-party page "open access" rate-limited on
   fetch, so it is not evidence.  Macdonald cites the paper (I notes after
   p. 148), and a four-page Royal Holloway problem sheet accurately reports
   its Theorem 3.1, but neither is a proof source.

   The cached Muth article is complete and proof-bearing -- Robert Muth,
   *Graded skew Specht modules and cuspidal modules for KLR algebras of affine
   type A*, arXiv:1412.7514, SHA-256
   `46c44528549a6152d1ee2781102cb5d430f9db29b4c0f7fddbfa2e76a16ddd36`,
   32 PDF pages, complete references; §§4--5, especially Theorems 5.12--5.13,
   were checked -- but it proves a **graded KLR** filtration.  Its Remark 5.14
   expressly says the corresponding KLR and classical positive-characteristic
   skew modules need not agree.  It cannot close the classical claim.

   Therefore replace `def-skew-specht-module` and
   `thm-skew-specht-modules-have-littlewood-richardson-specht-filtrations`
   with the minimal, proof-closed characteristic-zero pair:

   - `def-skew-multiplicity-module-over-c`: for `mu subseteq lambda`,
     `K^{lambda/mu}=Hom_{C[S_|mu|]}(S^mu,
     Res^{S_|lambda|}_{S_|mu| x S_{|lambda|-|mu|}}S^lambda)`, carrying the
     commuting `S_{|lambda|-|mu|}` action;
   - `thm-skew-multiplicity-module-has-lr-specht-decomposition-over-c`:
     `K^{lambda/mu} isomorphic to direct-sum_{nu} (S^nu)^{c^lambda_{mu,nu}}`.

   Dependencies are the restriction/skew-character proposition, the outer LR
   theorem, complex Maschke semisimplicity, and complex Specht classification.
   Frobenius reciprocity identifies the multiplicity space, while
   semisimplicity upgrades the character equality to this direct sum.  This
   preserves the important module-level scope without asserting an unproved
   arbitrary-field filtration.  A classical skew-polytabloid definition and a
   characteristic-free Specht filtration remain a real blocker until a
   complete James--Peel-style proof is fetched and its straightening and
   filtration joints are read.

### SYMR-4: exact Murnaghan--Nakayama repair

The main MN theorem has the right route and should not depend on generic
Mackey; its actual proof uses the full-cycle hook column, Frobenius reciprocity,
outer LR, and the cancellation below.  There is, however, a material typo in
the present cancellation lemma.  James Lemma 21.5 (pp. 81--82) gives, for a
union of `m` disjoint skew hooks with `r` nodes and a total of `c` columns,
the hook multiplicity

`binom(m-1,c-x)`,

not `binom(c-x,m-1)`.  With the convention that an out-of-range binomial is
zero, the necessary alternating coefficient is

`sum_{x=1}^r (-1)^(r-x) binom(m-1,c-x)`

`= (-1)^(r-c)` if `m=1`, and `0` if `m>1`.

This is the alternating-binomial expansion of `(1-1)^(m-1)`.  The currently
written transposed binomial is false already for one horizontal rim hook: it
would give nonzero contributions for every hook parameter `x`, rather than
only the correct one.  Correct
`lem-alternating-hook-induction-cancels-disconnected-rim-removals`, its proof
route, and `cex-a-disconnected-rim-set-is-not-a-border-strip` accordingly.
Then the stated MN formula has the correct sign, because for the surviving
single rim hook `r-c` is its leg/height.  Macdonald I §7 Example 5 is only an
independent statement check, not this proof.

### SYMR-13: internal product and stability

1. The outer/internal distinction, the power-sum equation
   `p_rho*p_sigma=delta_{rho,sigma}z_rho p_rho`, and the Schur expansion by
   Kronecker coefficients are correct (Macdonald I §7 Example 20/(7.12)).
   State `*` first degreewise on `Lambda^n`; extending it by zero across
   unequal degrees gives a nonunital operation on the direct sum, whereas
   Macdonald's completion has the formal unit `sum_n h_n`.

2. Add the missing self-duality/real-character supplier to
   `prop-kronecker-coefficient-is-a-three-character-inner-product`, or retain
   a conjugate on `chi^nu` in the general inner-product formula and derive its
   removal separately.  Maschke semisimplicity (not merely irreducibility of
   each Specht) is also needed in the definition to turn the tensor product
   into a direct-sum multiplicity.  The outer-induction definition is a
   pedagogical contrast, not a logical prerequisite.

3. `def-reduced-kronecker-coefficient` and
   `thm-murnaghan-stability-for-kronecker-coefficients` currently make a
   dependency cycle in substance: the definition says "once eventual
   constancy has been proved", while the theorem depends on that definition.
   Repair by first stating an existence theorem with the stable values in its
   conclusion, then define `bar g` in a following definition/corollary; or
   introduce only the padded sequence before the theorem.  The checked
   Briand--Orellana--Rosas article (arXiv:0907.4652, pp. 3--10) *uses/cites*
   Murnaghan's theorem and proves the sharp threshold conditional on that
   stable theory; it is not by itself a local proof of Murnaghan existence.
   Thus the present Murnaghan-existence row has a no-citation-only-proof
   blocker unless a complete proof source for the vertex-operator/Murnaghan
   theorem is fetched and its intermediate chain is scaffolded.

4. The exact global statement is otherwise right when phrased as
   `stab(alpha,beta)=|alpha|+|beta|+alpha_1+beta_1`: this is the least common
   range at which the whole product `s_{alpha[n]}*s_{beta[n]}` has its stable
   reduced expansion (Briand--Orellana--Rosas Thm. 1.2, Lemma 3.1, Thm. 3.2).
   Its proof also needs the Murnaghan--Littlewood top-degree fact
   `bar g^{alpha+beta}_{alpha,beta}=c^{alpha+beta}_{alpha,beta}=1`, not outer
   LR alone.  Add that lemma/source (or prove it) as an explicit dependency;
   then the upper bound from their Lemma 2.1 and the attaining `alpha+beta`
   term make the exactness argument genuine.

## Closure summary for integration

- **Source closure:** one independently validated complete symmetric-functions
  textbook, with all SYMR-1/2 core proofs, skew-character interface, LR proof,
  and internal-product formula actually read.
- **Required corrections:** cite Kostka (6.4)--(6.6); preserve RL-8 ownership;
  replace the skew-polytabloid/arbitrary-field placeholder with the
  characteristic-zero Hom multiplicity module; correct the MN binomial to
  `binom(m-1,c-x)`; remove MN's unused Mackey edge; break the reduced-Kronecker
  definition/theorem cycle; and add the missing self-duality and
  Murnaghan--Littlewood dependencies.
- **Real proof blockers:** a complete classical James--Peel source for the
  arbitrary-field skew-Specht filtration, and a complete proof source for
  Murnaghan existence if SYMR-13's stability theorem is to be locally proved.
  Neither is honestly closed by a citation, Macdonald's exercise/interface, or
  Muth's nonidentical KLR construction.
