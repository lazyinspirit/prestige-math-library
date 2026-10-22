---
id: lem-knot-floer-duality-and-filtration-swap
kind: lemma
title: "Knot Floer duality and exchange of the two filtrations"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-knot-floer-filtration-and-tau
  - def-reverse-mirror-of-oriented-knot
  - def-countable-choice
  - thm-doubly-pointed-s-three-moves-preserve-the-seifert-normalized-filtration
  - thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings
  - lem-doubly-pointed-knot-morse-fields-have-a-zero-framed-seifert-extension
  - lem-relative-s-three-maslov-gradings-have-a-unique-hat-homology-normalization
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The diagram-reflection and conjugation arguments use the ACω analytic branch for Heegaard Floer disk counts. The full-AC plan edge remains separate."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056"
      locator: "Sections3.3–3.5, printed17–21; actual diagram symmetries and both absolute filtration projections. The absolute swap constant is fixed below using the square of a filtered equivalence, without importing grid normalization."
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Concordance homomorphisms from knot Floer homology, Propositions 2.5–2.6"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "§2.1; filtration-swap symmetry and the mirror complex as the filtered dual"
    - title: "Jennifer Hom, The knot Floer complex and the smooth concordance group, §2"
      url: "https://arxiv.org/pdf/1111.6635"
      locator: "§2, PDF pp.4–5; reversal of both filtrations and duality for the reverse mirror"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume countable choice. Let $K\subset S^3$ be a smooth oriented knot and let $C(K)=\mathrm{CFK}^{\infty}(K)$ be its normalized bifiltered complex over $\mathbb F_2[U,U^{-1}]$. The complex of the reverse mirror $-K$ is filtered-chain-homotopy equivalent to the dual complex $C(K)^*=\operatorname{Hom}_{\mathbb F_2[U,U^{-1}]}(C(K),\mathbb F_2[U,U^{-1}])$, with dual differential $d\phi(x)=\phi(\partial x)$ and dual basis elements at negated bifiltration coordinates. There is also a Maslov-graded filtered-chain-homotopy equivalence from $C(K)$ to the complex obtained by exchanging the algebraic and Alexander filtrations. These are distinct symmetries: duality negates both filtration coordinates, while conjugation exchanges them.

## Statement references

[[def-countable-choice|The Axiom of Countable Choice for the disk-count branch]]

[[def-reverse-mirror-of-oriented-knot|Reverse-mirror convention for the smooth concordance inverse]]

[[def-knot-floer-filtration-and-tau|The normalized Seifert-Chern filtration convention]]

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, Propositions 2.5–2.6](https://arxiv.org/pdf/1407.1795)

[Hom, *The knot Floer complex and the smooth concordance group*, §2](https://arxiv.org/pdf/1111.6635)

## Facts & Assumptions

**Given:** The smooth oriented knot, its normalized complex, and the ACω disk-count branch stated in the frontmatter. All coefficient modules below use $\mathbb F_2$.

[F1] Actual admissible doubly pointed S3 diagrams have the full filtered minus count complex, retaining positive multiplicities at BOTH marks. The differential counts actual index-one classes with coefficient $U^{n_w}$; its degree is minus one. The accepted analytic construction supplies finite counts and square zero. [[def-admissible-pointed-heegaard-floer-data]] [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]]

[F2] Every two generators of a balanced S3 diagram are joined by an actual Whitney class, and the integer relative gradings satisfy $M(x)-M(y)=\mu(\phi)-2n_w(\phi)$ and $A(x)-A(y)=n_z(\phi)-n_w(\phi)$. The Seifert normalization is the actual NEGATIVE modified Morse field with its zero-relative-Euler cap; it is carried by oriented diagram data. Total zero-w hat homology is one-dimensional and its sole class has normalized Maslov degree zero. [[thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings]] [[lem-doubly-pointed-knot-morse-fields-have-a-zero-framed-seifert-extension]] [[lem-relative-s-three-maslov-gradings-have-a-unique-hat-homology-normalization]]

[F3] Between actual doubly pointed diagrams of the SAME oriented knot in S3 there are full minus filtered equivalences with filtered inverse homotopies, preserving the absolute Seifert origin and normalized Maslov degree. Every term $U^a y$ has $a\ge0$ and $A(y)-a\le A(x)$; thus localization is nonincreasing in both bifiltration coordinates. [[thm-doubly-pointed-s-three-moves-preserve-the-seifert-normalized-filtration]]

[F4] Write $C:\operatorname{Sym}^g(\Sigma,j)\to\operatorname{Sym}^g(-\Sigma,-j)$ for the map retaining the same unordered physical points. A conjugate surface coordinate is $\bar z$, so in unordered-root charts $C$ conjugates every elementary symmetric coefficient. It is therefore a smooth real diffeomorphism even at collisions, and is antiholomorphic for the standard induced complex structures. The strip-equation, linearized-operator and marked-degree correspondences for the two transformations are proved directly in steps3.1 and4.2.

[F5] Reversing the ambient orientation and the knot orientation is exactly the reverse-mirror convention in the Statement. [[def-reverse-mirror-of-oriented-knot]]

## Proof

1.1 **The actual bifiltered model.** Choose one supplied doubly pointed diagram $\mathcal H=(\Sigma,\alpha,\beta,w,z)$ and good count data in [F1]. Write $R=\mathbb F_2[U,U^{-1}]$. Its finite free localized module has generator $x$ in coordinates $(0,A(x))$, and $U^k x$ in $(-k,A(x)-k)$ of Maslov degree $M(x)-2k$. Equivalently write $[x,i,j]$ with $j-i=A(x)$ and degree $M(x)+2i$. Its differential is the actual sum of $[y,i-n_w(\phi),j-n_z(\phi)]$ over index-one classes $\phi:x\to y$. This dictionary follows directly from [F2], and records both positive marked degrees. All ensuing comparisons concern this finite free module and actual classes, not an abstractly postulated symmetry. [F1, F2, given, construct, algebra]

2.1 **Geometric diagrams and their knot labels.** Swapping the two attaching systems while keeping the oriented surface gives $\mathcal H^\vee=(\Sigma,\beta,\alpha,w,z)$. Physically the two handlebodies exchange their roles and both of their ambient orientations reverse, so this is $(-S^3,-K)$: the old beta bridge is now traversed from w to z and the old alpha bridge from z to w. After the fixed orientation-reversing ambient reflection, it is the reverse mirror [F5]. The compatible Morse function changes from $f$ to $-f$. The diagram $\mathcal H^c=(-\Sigma,\beta,\alpha,z,w)$ instead has the ORIGINAL ambient orientation (surface reversal cancels the handlebody exchange), and the ORIGINAL knot orientation (mark exchange cancels the bridge reversal). Explicitly, the new alpha arc is the OLD beta arc directed from old z to old w, and the new beta arc is the OLD alpha arc directed from old w to old z. Both are their ORIGINAL directions; only the starting point of the closed traversal changed. The surface reversal restores the original orientations on both physical handlebodies after their role exchange, so their identity gluing identifies the ambient oriented manifold with the original one. Thus this is the same oriented $(S^3,K)$ with its carried bridge disks, not an assumed oriented isotopy from K to its reverse. All complete compression data remain present. Their normalized periodic domains have zero coefficient at one mark precisely as before, and reversing labels or region orientations transports the admissibility sign tests. Use the transported count data rather than require the same arbitrary almost-complex path on every diagram. [F1, F2, F5, step 1.1, construct]

3.1 **Actual dual classes and counted operators.** For $\phi:x\to y$ represented by $u(s,t)$ put $u^\vee(s,t)=u(-s,1-t)$ and $J_t^\vee=J_{1-t}$. Its ends are y,x and its boundary lies on beta at t=0 and alpha at t=1. The equation becomes $u_s^\vee+J_t^\vee u_t^\vee=-(u_s+J_{1-t}u_t)=0$. The source map reverses both real coordinates and is orientation preserving; every individual divisor degree $n_w,n_z$ is unchanged. Precomposition is an invertible map of the actual weighted domains and targets of the linearized real operators, so kernels, cokernels and Fredholm indices agree. It reverses the translation parameter but induces a bijection of its orbits, hence of the actual zero-dimensional counted moduli spaces. It also gives the inverse on literal continuous classes and identifies broken ends. Thus if $\partial x$ contains $U^a y$ with coefficient $e\in\mathbb F_2$, the actual dual diagram differential contains $U^a x^\vee$ in $\partial y^\vee$ with the SAME coefficient. This is exactly the R-linear transpose $d\phi(x)=\phi(\partial x)$, without discarding any positive marked terms. [F1, F4, step 2.1, construct, algebra]

4.1 **Dual absolute origins.** On the physical exterior, $f\mapsto-f$ negates the selected negative Morse field while the ambient orientation also reverses. Its perpendicular plane therefore retains its physical orientation: its orientation is determined by the ambient orientation and the field direction, and both changed sign. Its determinant and Euler obstruction on the physical surface are unchanged. The reverse-mirror Seifert surface has the opposite surface orientation, so the capped pairing changes sign. The zero-Euler cap stays zero under this transport (a constant reversal of its boundary frame has winding zero). Hence $A^\vee(x^\vee)=-A(x)$ with NO affine shift. The relative index equation and [F2]'s Whitney connectivity give $M^\vee(x^\vee)=-M(x)+d$ for one integer d. After setting U=0, step3.1 is the finite vector-space dual of the actual TOTAL hat complex, including its positive-z differential. The homology of this dual is the dual of the original homology: a functional is a cycle exactly when it vanishes on boundaries, and quotient by functionals vanishing on cycles gives the dual of cycles modulo boundaries. Its sole homology class has degree zero when the basis degrees are $-M(x)$. Uniqueness of [F2]'s hat normalization therefore gives d=0. Sending $x^\vee$ to the R-dual basis functional $x^*$ is now an actual graded chain isomorphism with dual basis coordinates $(0,-A(x))$. An arbitrary shifted dual basis has coordinates $(-i,-j)$, exactly as stated. [F2, F5, step 2.1, step 3.1, construct, algebra]

4.2 **Actual conjugate classes.** For $\mathcal H^c$ use $u^c(s,t)=C(u(s,1-t))$ and $J_t^c=-C_*J_{1-t}$. Direct substitution gives $u_s^c+J_t^c u_t^c=C_*(u_s+J_{1-t}u_t)=0$. This time the ends x,y are unchanged. Source t reflection and target complex conjugation each reverse the relevant orientation, so their two signs cancel in every divisor degree. Since the mark labels were exchanged, $n_{w^c}(\phi^c)=n_z(\phi)$ and $n_{z^c}(\phi^c)=n_w(\phi)$. The same invertible real-operator conjugacy as step3.1 gives the actual index and count equality; C is defined by conjugating the coefficients of each unordered-root polynomial, not by the generally nonsmooth symmetric power of an arbitrary surface map. The protected integrable divisor neighborhoods, product generator charts and taming forms are transported to the conjugate surface, so the chosen data remain in the allowed class. On the physical exterior f changes to -f with the SAME ambient orientation, so the negative selected field reverses and its perpendicular plane is conjugated. The knot and Seifert surface orientations are unchanged by step2.1. The cap again has relative Euler zero. Thus its actual capped Chern pairing gives $A^c(x^c)=-A(x)$. [F1, F2, F4, step 2.1, step 3.1, construct, algebra]

5.1 **The raw swapped map and its one possible Maslov shift.** Define $S[x,i,j]=[x^c,j,i]$. Step4.2 and $A^c=-A$ make this an R-linear chain isomorphism: each term of the target differential lowers its first coordinate by $n_z$ and second by $n_w$. It and its inverse interchange the two filtrations EXACTLY. The actual relative index equations give $M^c(x^c)-M^c(y^c)=M(x)-M(y)-2(A(x)-A(y))$. By [F2]'s actual Whitney connectivity there is ONE integer c with $M^c(x^c)=M(x)-2A(x)+c$. Hence S has homogeneous Maslov degree c, since $M^c(x^c)+2j=M(x)+2i+c$. It is not legitimate simply to declare c=0 from relative gradings; the next step fixes it using the actual normalized equivalences. For genus zero the point complex already has A=M=0 and the assertion is immediate. [F2, step 1.1, step 4.2, construct, algebra]

6.1 **A square fixes the absolute Maslov shift without grid input.** By step2.1 and [F3], choose an actual Maslov-degree-zero bifiltered chain homotopy equivalence $E:C(\mathcal H^c)\to C(\mathcal H)$ with its bifiltered inverse and homotopies. Put $\Phi=ES$ on the ORIGINAL module. It is a coordinate-swap-filtered equivalence of homogeneous degree c. Its inverse $S^{-1}E^{-1}$ has the same swap filtration rule and degree -c. Therefore $\Phi^2$ and its inverse preserve the ORIGINAL bifiltration, and their inverse homotopies do also: compose the given homotopies with the swap maps on both sides, so two swaps cancel. In particular they restrict to the algebraic sublevel $i\le0$, the actual full minus module of step1.1; quotienting by U gives inverse chain homotopy equivalences of the actual total hat complex. The square is homogeneous of degree 2c. Its induced homology map is an isomorphism of a one-dimensional vector space supported only in degree zero by [F2]. Consequently 2c=0 as an INTEGER, and c=0. This uses neither a grid identification nor an unproved equality of the two independently normalized w/z Maslov origins. It proves that $\Phi$ itself is the required Maslov-graded coordinate-swap equivalence. [F2, F3, step 1.1, step 2.1, step 5.1, construct, algebra]

7.1 Finally apply [F3] to replace the chosen actual diagrams by any normalized models of K and of its reverse mirror; localizing the finite full-minus maps and their finite homotopies preserves all their identities and both filtration inequalities. Over a finite free R-module the R-dual of such a filtered homotopy equivalence is again one: dualize its explicit maps and homotopies and negate the dual basis coordinates. Thus step4.1 proves the FULL reverse-mirror duality, including its normalized grading and negated bifiltration; step6.1 proves the distinct Maslov-graded filtration exchange. Their generator maps, literal Whitney-class bijections, index-one counts, inverses and absolute origins were constructed above. No grid/analytic equality, four-dimensional degree formula, concordance-map nonvanishing or numerical knot computation is a premise. Both symmetries hold with all the original scope and the stated ACω analytic branch. [F1, F2, F3, F4, F5, step 4.1, step 4.2, step 5.1, step 6.1, algebra] ∎
