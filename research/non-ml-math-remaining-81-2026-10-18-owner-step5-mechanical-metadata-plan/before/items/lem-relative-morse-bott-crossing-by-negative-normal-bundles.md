---
id: lem-relative-morse-bott-crossing-by-negative-normal-bundles
kind: lemma
title: Relative Morse–Bott crossing by negative normal disk bundles
status: draft
dependency_level: 6
origin: pipeline
deps:
- def-axiom-of-choice
- thm-whitney-approximation-for-manifold-valued-maps
- thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
- thm-euclidean-inverse-function-theorem
- thm-fundamental-theorem-on-flows
- thm-morse-sard-for-smooth-manifolds
- prop-relative-cw-inclusions-are-cofibrations
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory
      (2021), expanded local argument
    url: https://arxiv.org/pdf/2011.14368v3
  - title: Marco Gualtieri, Morse Theory, section 2, Theorem 2.1 and Morse-Bott handle discussion, printed page 21
    url: https://www.math.toronto.edu/mgualt/Morse%20Theory/Notes16-23.pdf
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
---

## Statement

Assume AC. Let $f:M\to\mathbb R$ be smooth on a finite-dimensional boundaryless manifold. Write $M^b=\{f\le b\}$. Suppose $a<b$ are regular values, $f^{-1}([a,b])$ is compact, and its critical locus is a finite disjoint union of compact embedded critical manifolds on which the Hessian kernel is exactly the tangent space. At each critical value choose regular levels immediately below and above it, with no other critical values between them. The upper sublevel is, up to homotopy relative to the lower sublevel, obtained by attaching the negative normal disk bundles of all components at that value along their sphere bundles; positive normal disk factors give handle thickenings. If their negative normal ranks exceed $d$, every map of a finite CW pair $(K,L)$ of relative cell dimension at most $d$ into this upper/lower sublevel pair can be homotoped into the lower sublevel, fixed on $L$. Iterating gives the same conclusion across finitely many such nonminimum levels. A sufficiently small normal neighborhood of a compact clean minimum manifold retracts onto that manifold.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed; it implies the countable-choice assumptions in the differential-geometric suppliers. No stronger choice principle is introduced. ([[def-axiom-of-choice]]).

[F1] A closed embedded critical manifold has a tubular neighborhood, under countable choice. ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

[F2] Invertible derivatives admit local inverses, and smooth vector fields have unique local flows with smooth dependence on initial conditions. ([[thm-euclidean-inverse-function-theorem]], [[thm-fundamental-theorem-on-flows]]).

[F3] The critical values of a smooth finite-dimensional manifold map form a null set; this supplies transverse parameters for the finite perturbations below. ([[thm-morse-sard-for-smooth-manifolds]]).

[F4] Relative CW inclusions have the homotopy extension property. ([[prop-relative-cw-inclusions-are-cofibrations]]).

[F5] The proof of [[thm-whitney-approximation-for-manifold-valued-maps]] gives a smooth approximation with any prescribed positive pointwise error and the homotopy obtained by retracting the straight ambient segments. On a compact region this keeps the approximation homotopy inside any chosen open Morse chart and outside the obstruction whenever the error is chosen below the corresponding positive margins. The current AC assumption supplies the required countable choice.



**Proof technique:** direct construction.

**Given:** The data and hypotheses in the Statement.

## Proof

**Proof technique:** direct construction.

1.1 Let $C$ be one critical component at level $a$. In a tubular chart write $f-a=q+R$, where $q$ is the fiber Hessian quadratic form and $R$ has order at least three in the normal variable $z$. Set $f_s=q+sR$. Its vertical differential has the form $A_s(x,z)z$, where $A_s$ is the smooth symmetric operator obtained by integrating the vertical Hessian along $tz$, $0\le t\le1$. Since the normal Hessian is invertible, $A_s$ is uniformly invertible on a small tube over compact $C$. Write $R=\sum_i z_i R_i$ with $R_i(x,z)=\int_0^1\partial_iR(x,tz)\,dt$, and set $W_s=-A_s^{-1}(R_i)_i$. Then $df_s(W_s)=-R$. Radial integration and metric duality make this construction intrinsic on the normal bundle. [A1, F1, F2, construct]

2.1 The flow of $\partial_s+W_s$ fixes the zero section and exists for $0\le s\le1$ on a uniformly smaller tube, because $W_s$ is of order at least two and $C$ is compact. Along it $d(f_s)/ds=0$, giving a bundle normal form. Split the normal Hessian into negative and positive spectral subbundles and rescale by its positive square roots, obtaining $f=a-|u|^2+|v|^2$ on $\nu^-\oplus\nu^+$. The spectral projections are smooth locally: choose disjoint contours separating the positive and negative spectra and integrate the matrix resolvent. The positive square root is smooth by the inverse theorem applied to $T\mapsto T^2$, whose derivative $H\mapsto TH+HT$ is invertible for positive definite $T$. These local descriptions agree by uniqueness. [F2, step 1.1, algebra]

3.1 Let $g:D^q\to M$ be a parameter cell with $q<k=\operatorname{rank}\nu^-$, whose boundary maps into the lower sublevel. In a closed Morse block let $\Sigma$ be the co-core $u=0$, including its closed positive disk; it is compact and disjoint from the lower sublevel. Thus $g^{-1}(\Sigma)$ is compact in the cell interior. Choose nested compact neighborhoods of this preimage, away from the fixed boundary collar, mapping into a slightly larger Morse tube. The transition annulus misses $\Sigma$ by a positive distance. Extend $g$ to $\mathbb R^q$ by radial retraction to the cell. The controlled approximation and retracted-segment homotopy in [F5] give a smooth map arbitrarily close to $g$ there. Use a cutoff in the homotopy parameter, equal to one near $g^{-1}(\Sigma)$ and zero off the larger neighborhood. Sufficiently small error preserves the Morse tube and avoids $\Sigma$ on the transition annulus; the resulting map is smooth near every possible intersection and unchanged on the collar. On a neighborhood of that compact intersection write it as $(b,u,v)$. Choose finitely many local frames for $b^*\nu^-$ with bump functions supported away from the collar, whose products $s_1,\ldots,s_N$ span its fibers near the intersection. The family $u_a=u+\sum a_i s_i$ is transverse to zero in the parameter directions there. Its incidence manifold has dimension $q+N-k<N$, so [F3] gives arbitrarily small parameters $a$ for which $u_a$ has no zero there. On the remaining compact parts of the supports over the positive disk the unperturbed $u$ is bounded away from zero; small parameters create no new intersection. The homotopy $u_{ta}$ is fixed on the collar and stays in the larger tube. Hence the cell misses the entire closed co-core. Choose the block for this avoidance slightly larger than the one subsequently used for the stopped flow, so that any new points near its entrance face also miss the co-core. [F1, F3, F5, step 2.1, construct]

3.2 Fix a critical value $c$ and choose $\varepsilon>0$ so that $c\pm\varepsilon$ are regular and the compact band between them contains exactly the critical manifolds at $c$. Choose mutually disjoint Morse tubes as in step 2.1, and shrink $\varepsilon$ so that each contains the closed block $H=\{|u|^2\le2\varepsilon,\ |v|^2\le\varepsilon\}$. This block lies in $M^{c+\varepsilon}$; its $u$-face lies in $M^{c-\varepsilon}$. Use $X=(2u,-2v)$ near each block and patch to $-\operatorname{grad}f$ elsewhere in the band. Convex combinations still satisfy $df(X)<0$ at every regular point. Put $B=M^{c-\varepsilon}\cup\bigcup H$. Outside the interior of $B$ in the band there are no critical points, and this closed set is compact, so $-df(X)$ has a positive lower bound there. Every trajectory starting outside $B$ therefore reaches $B$ in bounded time. It enters a block only through its $v$-face, where $d|v|^2(X)=-4|v|^2<0$, or reaches the regular lower level, where $df(X)<0$. These transverse entrance equations and uniqueness of the flow make the first hitting time continuous, including where the two faces meet; it tends to zero at an entrance face. Stopping the flow on $B$ consequently gives a deformation of $M^{c+\varepsilon}$ onto $B$, fixed on $B$. Only the compact band moves. Critical-free gaps between the chosen levels are treated by the same normalized descending flow. [F2, step 2.1, construct]

4.1 The block is $D(\nu^-)\times_C D(\nu^+)$ after rescaling its radii. Its intersection $A_H$ with the lower sublevel is $\{|u|^2-|v|^2\ge\varepsilon\}\cap H$. If the negative rank is positive, $u\ne0$ on $A_H$, and increasing $|u|$ linearly to $\sqrt{2\varepsilon}$ at fixed $v$ retracts $A_H$ onto the $u$-face. More explicitly, in each negative radial fiber $A_H$ is the collar $\sqrt{\varepsilon+|v|^2}\le |u|\le\sqrt{2\varepsilon}$; this description is invariant under orthogonal changes of frames. Thus the union $B$ is the lower sublevel with these thickened negative disks attached through collars of their sphere faces. Removing the collars and contracting the positive disk factors gives, up to homotopy relative to the lower sublevel, attachment of $D(\nu^-)$ along $S(\nu^-)$. The collar formulas also cover zero positive rank; for zero negative rank $A_H$ is empty and the block is a new minimum neighborhood, retracted by $v\mapsto(1-t)v$. To pass a parameter cell through a positive-negative-rank block, first deform into $B$ by step 3.2 and apply step 3.1 to avoid the closed co-core $u=0$ in a slightly larger block, with the field still $(2u,-2v)$ there. Make the perturbations sufficiently small to stay below a slightly larger regular upper level with no additional critical values. Along the resulting compact family in a block, $|u|$ is bounded below away from zero until it exits, and the explicit flow $(e^{2t}u,e^{-2t}v)$ reaches the $u$-face in uniformly bounded time. The flow then reaches the lower sublevel. It is fixed on parameter points already in that sublevel. The slightly enlarged upper sublevel retracts onto the original upper sublevel through its critical-free intervening band, fixed on the latter. Composing the perturbation homotopy with this retraction keeps its target in the original upper sublevel. This proves the relative passage for a cell of dimension less than the negative rank. [F2, step 2.1, step 3.1, step 3.2, construct]

5.1 Perform the relative passage on characteristic disks in cell order, extending boundary homotopies by [F4]. The finite number of cells and compact parameter images make all the required crossing times finite. Iterating across regular critical-free gaps and the finitely many isolated critical values proves passage to the lower sublevel whenever all crossed negative ranks are greater than $d$; components sharing a critical value are handled together in disjoint tubes. If the remaining lower sublevel is a sufficiently small neighborhood of the minimum locus, its normal contraction from step 4.1 completes deformation into that locus. No infinite-time convergence is asserted. [F4, step 4.1, step 3.1, construct] ∎
