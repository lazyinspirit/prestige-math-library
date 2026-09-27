# Audit addendum: batch-8 relative projective-line cohomology

Independent read-only source audit of the completed first-pass Step-1 AV/RL
batch-8 A-page scaffold (27 A items, three B examples). This addendum is
evidence, not a readiness receipt. It changes no
batch-8 worker file, plan, selected scope, receipt, or engine state.

## Exact route supported by primary sources

For a Zariski-locally trivial \(\mathbf P^1\)-bundle
\(\pi:E\to S\), a line bundle \(L\) of fibre degree \(n\geq-1\), and the
relative canonical bundle \(K_\pi=\Omega^1_{E/S}\), the desired interface is

\[
R^q\pi_*L=0\ (q>0),\qquad
R^q\pi_*(L\otimes K_\pi^{n+1})=0\ (q\ne1),\qquad
\pi_*L\simeq R^1\pi_*(L\otimes K_\pi^{n+1}).
\]

The last isomorphism needs a fixed normalization of the rank-two apolarity
pairing; it is then natural in the pair \((E,L)\). For \(n=-1\), both direct
image rows vanish. The Leray spectral sequence gives
\(H^i(E,L)\simeq H^{i+1}(E,L\otimes K_\pi^{n+1})\) because each side has
only the respective \(q=0\) or \(q=1\) row.

This has a bounded local proof once the projective-bundle Picard splitting
is supplied: on an open \(U\subseteq S\) where
\(E_U=\mathbf P(V)\) for a rank-two vector bundle \(V\), write
\(L_U=\mathcal O_{\mathbf P(V)}(n)\otimes\pi^*M\). Use Stacks' quotient
convention \(\mathbf P(V)=\operatorname{Proj}\operatorname{Sym}V\), where
\(\pi_*\mathcal O(n)=\operatorname{Sym}^nV\). The universal quotient sequence
gives
\(K_\pi=\mathcal O(-2)\otimes\pi^*\det V\). Stacks,
*Cohomology of Schemes*, Lemma 30.8.4 (tag
[01XX](https://stacks.math.columbia.edu/tag/01XX), PDF pp. 20–22) yields,
for \(n\geq0\),

\[
\begin{aligned}
\pi_*L&=\operatorname{Sym}^nV\otimes M,\\
R^1\pi_*(L\otimes K_\pi^{n+1})
&=\operatorname{Hom}(\operatorname{Sym}^nV\otimes\det V,\mathcal O_U)
  \otimes(\det V)^{n+1}\otimes M\\
&\simeq\operatorname{Sym}^nV^\vee\otimes(\det V)^n\otimes M
 \simeq\operatorname{Sym}^nV\otimes M.
\end{aligned}
\]

The final arrow is induced by the canonical wedge identification
\(V\simeq V^\vee\otimes\det V\). It is \(\mathrm{GL}_2\)-equivariant,
including scalar matrices, and is linear in \(M\), so it glues across local
trivializations (after refining overlaps for local \(\mathrm{GL}_2\) lifts of
the \(\mathrm{PGL}_2\) transitions). Stacks Lemma 30.8.1 (tag
[01XT](https://stacks.math.columbia.edu/tag/01XT), PDF pp. 16–19) proves
the Laurent-monomial calculation over **any ring**; Lemma 30.8.2 (tag
[01XV](https://stacks.math.columbia.edu/tag/01XV), pp. 19–20) proves affine
base-change compatibility; Lemma 30.8.3 (tag
[01XW](https://stacks.math.columbia.edu/tag/01XW), p. 20) sheafifies it
over arbitrary \(S\). Lurie, [*A Proof of Borel–Weil–Bott*](https://people.math.harvard.edu/~lurie/papers/bwb.pdf),
pp. 2–3 (Theorem 3), gives the same family-level shift by choosing an
\(\mathrm{SL}_2\)-equivariant fibre isomorphism and descending it. Stacks,
*Cohomology of Sheaves*, Lemma 20.13.4 (tag
[01F2](https://stacks.math.columbia.edu/tag/01F2)), is the exact Leray
source. The published abstract Grothendieck spectral sequence can also give
Leray once the injective/acyclicity hypotheses are established.

## Boundary in the active scaffold

The current A inventory has 27 items, leaving 33 numeric slots under its
60-item cap. Rows `def-higher-direct-image-sheaf-cohomology`,
`thm-leray-spectral-sequence-for-sheaf-cohomology`,
`lem-relative-projective-line-cohomology-and-apolarity`, and
`thm-relative-p1-line-bundle-cohomology-shift` name the right stages. The
Leray strategy correctly observes that exact inverse image makes \(f_*\)
send abelian-sheaf injectives to injectives. The relative lemma's currently
listed dependencies do **not** yet discharge these exact interfaces:

1. Its local projective-space cohomology supplier is stated only for
   \(\mathbf P^r_k\) over a field. Relative direct images and arbitrary
   base change need the arbitrary-ring calculation and its functoriality,
   exactly Stacks Lemmas 30.8.1–4. A source citation in coverage is not a
   proved local item or valid dependency edge.
2. The standard affine-chart Čech argument still needs quasi-coherent
   cohomology vanishing on affine opens and their intersections. The coverage
   explicitly defers Stacks Lemmas 30.2.1 (tag 01X9), 30.2.2 (tag 01XB),
   and 30.2.6 (tag 01XD) to an empty,
   unpublished page. The batch-7 acyclic-cover theorem applies only *after*
   this acyclicity is proved.
3. The step \(L_U\simeq\mathcal O(n)\otimes\pi^*M\) needs a
   projective-bundle Picard splitting (or an equivalent direct local
   construction) for arbitrary, possibly nonreduced base \(U\). Constant
   fibre degree alone is not this splitting. The general relative lemma
   must also define \(K_\pi\) and justify the
   projective-bundle Euler/determinant formula or derive it in its proof;
   the preceding flag-specific \(K_\pi\simeq\mathcal L_{-\alpha}\) item
   alone does not define the arbitrary-family object. It must also identify
   abelian-sheaf \(R^q\pi_*\) with the \(\mathcal O_S\)-module direct images
   used in the formula, or perform the local Čech calculation directly as
   sheaves of \(\mathcal O_S\)-modules.
4. The family-level isomorphism must check \(\mathrm{GL}_2\) transition
   equivariance, the determinant factor, and the extra base-line factor
   \(M\); fibrewise Serre duality only yields a dual vector space and does
   not itself give the required natural direct-image isomorphism.

For the flag application, the established convention
\(\mathcal L_\lambda=G\times_B\mathbf C_{-\lambda}\) gives
\(n=\langle\lambda,\alpha^\vee\rangle\) and
\(K_\pi=\mathcal L_{-\alpha}\), hence
\(L\otimes K_\pi^{n+1}
=\mathcal L_{\lambda-(n+1)\alpha}
=\mathcal L_{s_\alpha\cdot\lambda}\).
This sign check is valid only after the flag-specific algebraic fibration and
canonical-bundle interfaces are proved. Numerically the local relative
repair seems feasible within 33 slots; the scaffold does not yet provide a
complete proved chain, so no readiness conclusion follows.

The actual flag consumer admits a narrower route than the general lemma.
Milne Theorem 25.9 supplies Zariski-local sections of
\(G\to G/P_{\{\alpha\}}\), which trivialize *both* the fibration and its
homogeneous line bundle:
\((G/B,\mathcal L_\lambda)|_U\simeq
U\times(P_{\{\alpha\}}/B,\mathcal L_\lambda|_{P_{\{\alpha\}}/B})\).
On an affine \(U\), the two-chart Čech complex is
\(\mathcal O(U)\otimes_{\mathbf C}\) the rank-one fibre complex; its monomial
basis makes this tensor/base-change calculation explicit. This removes the
arbitrary-line-bundle Picard-splitting obligation **if** row 17 is narrowed
to the homogeneous flag application. Descent then requires the fibre
apolarity map to be \(P_{\{\alpha\}}\)-equivariant: its unipotent radical
acts trivially on the quotient and character line, and its Levi action
reduces to the rank-two determinant-corrected wedge pairing. The missing
affine quasi-coherent acyclicity remains necessary for derived \(R^q\pi_*\).
This narrower statement would need an explicit design/plan amendment if
row 17 must retain its stated general \(\mathbf P^1\)-bundle scope.

## Final stable-scaffold verdict

After the batch-8 writer exited, the manifest still has the field-only
`lem-projective-space-twist-cohomology-cech` and the general relative lemma
with no Picard-splitting, arbitrary-ring base-change, or affine-acyclicity
supplier edge. The notes explicitly defer the three Stacks §30.2 affine
cohomology interfaces to the unbuilt quasi-coherent-cohomology page, and the
relative lemma's Step-1 receipt is escalated. The first-pass Leray item
was escalated because the published Grothendieck-spectral-sequence page
was absent from the A page's declared requires. The owner subsequently
added that direct plan/manifest edge, checked the abelian-sheaf hypotheses,
and recertified Leray as ready. The consumer shift theorem remains
escalated on the relative direct-image calculation. These are honest
holds, not hidden ready claims.

At the mathematical level the relative calculation is locally supplyable
with Stacks 30.8.1–4, a projective-bundle Picard/relative-canonical bridge,
the determinant-corrected apolarity descent, and the §30.2 affine
cohomology input. The narrower homogeneous-flag route avoids the general
Picard bridge but needs the same affine input and a \(P_{\{\alpha\}}\)-equivariant
descent check. Neither complete route is proved by the stable scaffold;
the 33 remaining numeric A slots are capacity, not proof evidence.
