# Draft: batch 8 flag-geometry source audit

Status: independent, read-only mathematical audit of the algebraic-group and
flag-variety portion of the active AV/RL batch-8 A page. This is a research
draft, not a readiness receipt. No selected batch-8 scope, manifest, plan,
receipt, or engine state is changed by this audit.

The selected A page is
`smooth-projective-serre-duality-and-flag-variety-line-bundles`. Its planned
rows 8–16 ask for a connected simply connected complex semisimple *algebraic*
group \(G\), \(B\supset T\), the smooth projective quotient \(G/B\), Bruhat
cells, homogeneous line bundles, the canonical weight, and the rank-one
projection to \(G/P_\alpha\). The currently published Lie suppliers provide
root-space and abstract root-system facts and smooth real homogeneous-space
facts. They do not provide algebraic group quotients, root subgroups, algebraic
torsors, or algebraic Bruhat cells. The tenets below therefore have to be
proved locally or exposed as explicit source-backed prerequisites. Fixing a
pre-existing algebraically simply connected \(G\), as row 8 permits, avoids an
unnecessary construction of all semisimple groups from root data.

## Source-checked interface DAG

The following is a logical order, not a declaration that the page is ready.

| Interface | Needed for planned rows | Precise supplier and obligation |
|---|---|---|
| Algebraic root datum | 8, 10, 13–16 | For complex semisimple algebraic \(G\), construct algebraic \(U_\alpha\simeq\mathbf G_a\), rank-one \(G_\alpha\) with an isogeny from \(\mathrm{SL}_2\), and the algebraic torus coroot \(\alpha^\vee\). Show \(B=T\ltimes U\), \(U=\prod_{\alpha>0}U_\alpha\), and reconcile its roots with the published Lie root spaces. Milne, *Algebraic Groups*, Theorem 21.11 (printed pp. 428–429) and Theorem 21.68 (pp. 445–446); the equivalence between algebraic simple connectedness and \(X^*(T)=P(\Phi)\) is Proposition 23.59 (p. 504), whose converse direction uses the root-datum existence theorem. Lie-root suppliers alone stop before this interface. |
| Algebraic homogeneous quotients | 8, 9, 14 | Represent \(G/B\) and \(G/P_I\) as varieties, establish quotient torsors, then prove \(G/B\) smooth, connected and projective; a parabolic \(P_I\) has projective quotient too. Milne Theorem 7.18 (p. 143) constructs \(G/H\) for smooth affine \(G\); Theorem 17.9 (pp. 354–355), Theorem 17.16 (pp. 356–357), and §17f (pp. 368–369) supply Borel/projective geometry. The proof route uses Chevalley's stabilizer-of-a-line representation and Lie–Kolchin; neither is in the listed Lie suppliers. |
| Algebraic Bruhat cells | 10, 14 | Prove \(G=\coprod_{w\in W}BwB\) as algebraic strata and \(BwB/B\simeq U^w\simeq\mathbf A^{\ell(w)}\), with an open dense big cell. Milne §§21g–h, especially Proposition 21.79 and Theorem 21.80 (pp. 450–451), and Theorem 21.84 (p. 452). An abstract Weyl-group length formula is insufficient. |
| Torsor descent and equivariant lines | 11–13, 15–16 | Show \(G\to G/B\) is a Zariski-locally split algebraic \(B\)-torsor and construct \(G\times_B\mathbf C_{-\lambda}\) as an algebraic line bundle. Evaluation at \(eB\) and descent identify \(\operatorname{Pic}^G(G/B)\simeq X^*(B)=X^*(T)\). Milne Proposition 16.55(c) (p. 344) and Proposition 18.14 (p. 391); Theorem 18.32 (p. 396) treats ordinary Picard descent. Algebraic simply connectedness is needed to make every abstract weight a torus character, not to classify *equivariant* line bundles by the characters that already exist. If the claim silently broadens to all ordinary line bundles, the \(\operatorname{Pic}(G)\) and \(X^*(G)\) terms in Milne Theorem 18.15 and Theorem 18.32 must also be discharged. |
| Correct rank-one parabolic and local fibration | 14, 15 | For a simple root \(\alpha\), use \(P_{\{\alpha\}}=B\cup Bs_\alpha B\), so \(P_{\{\alpha\}}/B\simeq\mathbf P^1\). The quotient \(G/B\to G/P_{\{\alpha\}}\) is Zariski locally trivial via local sections of \(G\to G/P_{\{\alpha\}}\). Milne Theorem 21.91 (pp. 454–455), Theorem 21.11, and Theorem 25.9 (pp. 549–550). This is the *minimal parabolic over \(B\)*. Milne Proposition 21.88 (p. 453) uses \(P_\alpha\) for a generally maximal parabolic attached to a fundamental coweight; copying that notation into row 14 gives the wrong fibre in rank \(>2\). |
| Isotropy tangent and determinants | 13, 15–16 | Establish algebraically \(T_{eB}(G/B)=\mathfrak g/\mathfrak b=\bigoplus_{\beta>0}\mathfrak g_{-\beta}\) and vertical tangent \(\mathfrak p_{\{\alpha\}}/\mathfrak b=\mathfrak g_{-\alpha}\), then descend their determinants. The algebraic tangent/quotient setup is in Milne §7e and §§21–22; the published smooth real quotient tangent supplier is not itself this algebraic statement. The rank-one restriction must be computed in the stated sign convention, rather than inferred from another author's indexed line bundle. |

The first, second, and fourth interfaces are independent starting points; the
Bruhat and rank-one interfaces use algebraic roots and quotients; the tangent
calculation uses both algebraic quotient and root data. The selected planned
inventory has 17 A items, hence 43 numeric A-item slots remain under the
60-item cap. Six logical interfaces might fit in approximately 6–10 additional
items, but that is only a count. It neither proves those deep inputs nor
certifies the full Serre-duality/relative-cohomology half of the page.

## Convention and rank-one checks

Take \(B\) to contain the positive-root groups, and retain the planned
definition

\[
\mathcal L_\lambda=G\times_B\mathbf C_{-\lambda},
\qquad (gb,v)\sim(g,(-\lambda)(b)v).
\]

For \(G=\mathrm{SL}_2\), \(B\) upper triangular and \(\omega\) the fundamental
weight, the fibre of \(\mathcal O_{\mathbf P^1}(1)\) at \(eB=[1:0]\) has
character \(-\omega\). Thus
\(\mathcal L_\omega|_{P_{\{\alpha\}}/B}\simeq
\mathcal O_{\mathbf P^1}(1)\), and in general

\[
\deg(\mathcal L_\lambda|_{P_{\{\alpha\}}/B})
=\langle\lambda,\alpha^\vee\rangle.
\]

The cotangent fibre at \(eB\) has positive-root weights, so its determinant
has \(B\)-character \(2\rho=\sum_{\beta>0}\beta\). With the planned *negative*
fibre-character indexing this yields

\[
K_{G/B}\simeq\mathcal L_{-2\rho},\qquad
K_{(G/B)/(G/P_{\{\alpha\}})}\simeq\mathcal L_{-\alpha},\qquad
\deg K_{\mathrm{relative}}|_{\mathbf P^1}=-2.
\]

Here \(\langle\rho,\alpha^\vee\rangle=1\), so \(\rho\) is an actual
character when algebraic \(G\) is simply connected. The two displayed
canonical bundles only require the root-lattice characters \(2\rho\) and
\(\alpha\).

Lurie, *A Proof of Borel–Weil–Bott*, pp. 1–3, takes \(G/B\) and the basic
algebraic geometry as input. On p. 3 he writes the relative and absolute
canonical bundles with indices \(\alpha\) and \(2\rho\) under his initial
indexing by the *fibre character*. Those indices become \(-\alpha\) and
\(-2\rho\) in this page's \(\mathcal L_\lambda=G\times_B\mathbf
C_{-\lambda}\) convention. He later shifts his indexing by \(\rho\), which
must not be imported without translation. Brion, *Lectures on the Geometry of
Flag Varieties*, §1.2, pp. 6–8, constructs the \(\mathrm{GL}_n\) flag model;
§1.4, pp. 15–16, discusses associated line bundles and degree. Its displayed
associated-bundle action and positive-degree statement require convention
reconciliation before using its symbols with the present page. The explicit
\(\mathrm{SL}_2\) fibre test above fixes the local sign. Brion's general
lecture does not by itself construct the quotient for every semisimple \(G\).

## Source status and open boundary

Primary sources inspected for the precise interfaces above:

- J. S. Milne, [*Algebraic Groups* (2022)](https://www.jmilne.org/math/Books/iAG2022.pdf), especially Chapters 7, 16–18, 21, and 25. The cited statements and their immediate proof passages were inspected. The full upstream proofs of Chevalley representation, Lie–Kolchin, rank-one group classification, and root-group factorization were not independently reconstructed for this page.
- M. Brion, [*Lectures on the Geometry of Flag Varieties*](https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf), §§1.2 and 1.4. Its explicit initial quotient construction is type A.
- J. Lurie, [*A Proof of Borel–Weil–Bott*](https://people.math.harvard.edu/~lurie/papers/bwb.pdf), pp. 1–3. It presupposes the projective flag quotient and fixes a different line-bundle index.

This establishes a source-located route for the geometry, not a ready proof
in the batch-8 A page. The outstanding work is to instantiate the six
interfaces with hypotheses, full local arguments or admissible published
suppliers, and exact algebraic-descent and sign checks, then verify the whole
page against its 60-item cap and dependency policy. At this audit point no
claim that rows 8–16 are ready, or that the entire batch-8 A/B pair is
buildable, is justified.
