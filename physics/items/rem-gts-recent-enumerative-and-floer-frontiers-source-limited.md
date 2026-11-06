---
id: rem-gts-recent-enumerative-and-floer-frontiers-source-limited
kind: remark
title: Recent enumerative and Floer frontiers (source-limited)
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Yuhan Sun, Symplectic Cohomology with Support and Aspherical Perturbations, arXiv:2607.24626v1
      url: https://arxiv.org/pdf/2607.24626v1
      locator: Definitions 1.1–1.2 and Theorem 1.3; §2.1 for the restricted Hamiltonian Floer setup; §2.2, equations (2.7)–(2.8) and Remark 2.7 for the action-filtration scope
    - title: Semon Rezchikov, Noncommutative Cartier Formulae, arXiv:2607.05360v1
      url: https://arxiv.org/pdf/2607.05360v1
      locator: Theorem 1.27; Section 12 Assumptions A–F; §12.8 proof; internal A–G/A–F/A–E mismatch recorded
    - title: Nikolas Kuhn, Henry Liu, and Felix Thimm, Wall-crossing for invariants of equivariant 3CY categories, arXiv:2512.23012v1
      url: https://arxiv.org/pdf/2512.23012v1
      locator: Assumptions 1.3.2 and 1.3.8, Theorem 1.3.9, and §4.1 Lemma 4.1.12 (proof refers to Joyce Proposition 10.3)
    - title: Arkadij Bojko, Wall-crossing for Calabi–Yau fourfolds, arXiv:2507.05922v3
      url: https://arxiv.org/pdf/2507.05922v3
      locator: Theorem 1.8, Corollary 1.9, and proper-fixed-locus assumptions
    - title: Daniel Holmes and Yannik Schuler, Experiments with Membranes, Maps and Sheaves, arXiv:2609.03152v1
      url: https://arxiv.org/pdf/2609.03152v1
      locator: Abstract; §1.4 situation (7), §1.4.2 Conjecture 1.6; §2 strip geometries; §§4.2.4 and 5.2 selected numerical evidence
    - title: Dietmar Salamon, Lectures on Floer Homology
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §1.1 printed p. 3; §1.4 printed p. 10; §2.4 printed pp. 20–21, general Hamiltonian Floer conventions used only as background
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Remarks

As of 2026-10-26, these are source-reported frontier interfaces, not logical suppliers. Sun's Theorem 1.3 asserts invariance of the paper's Hamiltonian action-filtration version of symplectic cohomology with support for a compact $K$ in a closed $M$ when $\omega$ and $\omega'$ are aspherical (their integrals vanish on $\pi_2(M)$), adjacent, and $U$-comparable for a neighborhood $U$ of $K$. In §2.2, equations (2.7)–(2.8), this version is the cohomology of a completed Hamiltonian Floer telescope, with completion allowing sums whose Hamiltonian actions tend to $+\infty$. Remark 2.7 warns that this construction and the original Novikov-filtration construction can give different groups; the reported invariance is confined to the former. “Adjacent” means that some almost-complex structure is tame for both forms. “$U$-comparable” means $\omega=\omega'$ on $U$ and, for every sequence $u_j:(D^2,\partial D^2)\to(M,U)$, the $\omega$-areas diverge to $+\infty$ exactly when the $\omega'$-areas do. The source does not state invariance under arbitrary changes of symplectic form.

Rezchikov's Theorem 1.27 reports that for a Calabi–Yau symplectic manifold (the source's §12.1 convention is $c_1(TM)|_{\pi_2(M)}=0$, together with $[\omega]\in H^2(M;\mathbb Z)$ and its integral Novikov-ring setup), the symplectic $p$-curvature conjecture holds under “Assumptions A–G of Section 12” for $p>f(\dim M,b,N,\dim M)$ as printed, where $b$ is the maximal grading of a nonzero Floer cohomology group for a Lagrangian pair used to define the Fukaya category and $N$ is the positive localization denominator in the coefficient ring $\mathbb Z[1/N]$ of Assumption A; that setup also requires $p>N$. In the source notation the conjecture equates the quantum-connection $p$-curvature with its operation $Q^\Sigma_\omega$. For a connection $\nabla$ in characteristic $p$, its $p$-curvature along a vector field $D$ is $\nabla_D^p-\nabla_{D^{[p]}}$, where $D^{[p]}$ is the $p$-fold derivation of functions. Section 12 summarizes A–F as coefficient, Fukaya-category, open-closed comparison, compatibility, and no-$p$-torsion assumptions; the theorem says A–G, while §12.8 proves the claim assuming only A–E. Thus F is stated but omitted from the proof's hypothesis sentence, and G is not defined in the section. This source-internal scope defect is unresolved, so the entry makes no theorem-level supplier claim.

Kuhn–Liu–Thimm Theorem 1.3.9 reports a finite Lie-bracket formula for localized operational equivariant $K$-homology in the source's $T$-equivariant 3-Calabi–Yau category setup. The source assumes a Noetherian $\mathbb C$-linear abelian category with an Artin locally finite-type moduli stack, the specified graded monoidal structure and compatible $\kappa$-symmetric obstruction data; $\tau$ and $\widetilde\tau$ are weak stability conditions satisfying the weak see-saw property. Assumption 1.3.2 requires $\tau$-Harder–Narasimhan filtrations, open stable and semistable substacks, framing functors covering every finite collection of semistable classes, a positive additive rank function on semistable equal-slope factors, the source's two excluded slope patterns for subobjects of equal-slope semistable objects, and properness with the resolution property for the listed semistable, framed auxiliary and master spaces. Assumption 1.3.8 additionally requires $\widetilde\tau$-Harder–Narasimhan filtrations and openness, a homomorphism $\lambda$ whose sign on the source set $R_\alpha$ agrees exactly with whether $\widetilde\tau(\beta)$ is greater or less than $\widetilde\tau(\alpha-\beta)$, and properness with the resolution property for the specified torus-fixed auxiliary spaces and master spaces. Here $R_\alpha$ is the source set containing $\alpha$ and the effective classes $\beta$ with $\alpha-\beta$ effective, $\tau(\beta)=\tau(\alpha-\beta)$, and both corresponding $\tau$-semistable loci nonempty. Under Assumption 1.3.8 and weak dominance of $\tau$ over $\widetilde\tau$ at $\alpha$, the formula sums over decompositions $\alpha=\alpha_1+\cdots+\alpha_n$ with $\tau(\alpha_i)=\tau(\alpha)$ and nonempty $\tau$-semistable loci, using the source universal coefficients and nested Lie brackets in localized operational equivariant $K$-homology; the source rank function makes the sum finite. The source's Lemma 4.1.12 states endpoint restrictions on the auxiliary semistable loci, but its proof refers to the proof of Joyce Proposition 10.3 rather than reproducing it. There is an unresolved endpoint convention in the printed hypotheses: §1.2.5 defines a weak stability only on nonzero effective classes, Definition 1.3.7 includes $\alpha$ in $R_\alpha$, and Assumption 1.3.8(b) compares $\widetilde\tau(\beta)$ with $\widetilde\tau(\alpha-\beta)$ for every $\beta\in R_\alpha$, including $\beta=\alpha$. No value of $\widetilde\tau(0)$ or exception for that case is stated in these definitions. The local acyclic-quiver diagnostic has therefore not verified all the printed hypotheses and is not an established counterexample to the full source theorem. The local draft's additional detection condition (D) narrows the approved weak-dominance-only scope; it does not establish that scope. This entry imports neither an unconditional wall-crossing identity nor a verdict that the source theorem is false. The source theorem remains a reported frontier result, not a local proof or logical supplier. This source limitation does not remove any independent qualification of the other frontier statements recorded here.

The retained [acyclic-quiver research diagnostic](../../../../conformal-field-theory-string-theory-all-97-2026-10-26-owner-step1-stable-map-stack/cy-operational-masterspace/cy3-weak-dominance-counterexample.md) (sections “Two genuine slopes and the actual weak-dominance condition” and “The claimed equality is detected to be false”) specifies the quiver $b\to s\to c$, $b\to c$, the grading $[s]=b+c$, and opposite slopes $\mu(u,v)=(u-v)/(u+v)$ and $\widetilde\mu=-\mu$. At $\alpha=(1,1)$ its initial semistable locus has the two objects $S_s,P$, whereas the final locus has only $S_s$. Its assertion that $\lambda=0$ satisfies all of Assumption 1.3.8(b) leaves the printed $\widetilde\tau(0)$ comparison unresolved; the draft's stronger counterexample verdict is therefore not adopted here. The retained [finite-detection research candidate](../../../../conformal-field-theory-string-theory-all-97-2026-10-26-owner-step1-stable-map-stack/cy-operational-masterspace/cy3-finite-hn-detection-repair.md), section “The additional finite condition”, defines (D): for every $\beta\in\widetilde R_\alpha$ and every initially semistable object $E$ of class $\beta$ that is finally unstable, there must be a short exact sequence $0\to E'\to E\to E''\to0$ with both endpoints nonzero and initially semistable, their classes in $R_\alpha$, and $\widetilde\tau(E')>\widetilde\tau(E'')$. These are identifiable research drafts, not accepted local theorem suppliers. This source report verifies neither their complete operational/properness constructions nor the candidate's complete wall-crossing proof.

Bojko's v3 Theorem 1.8 states equivariant wall-crossing and independence of the auxiliary integer $k$ for (i) the specified compactly supported sheaf category on the source's local/quasi-projective Calabi–Yau fourfold and (ii) degree-zero representations of the stated Calabi–Yau fourfold dg-quiver. Its applications require the source's properness assumptions for torus-fixed loci; Corollary 1.9 is the specified local-Calabi–Yau-fourfold stable-pair application. It is not a universal CY4 wall-crossing theorem.

Holmes–Schuler Conjecture 1.6 is a K-theoretic GW/PT correspondence conjecture for the source’s equivariantly Calabi–Yau fivefold $Z=\operatorname{Tot}_X(L_4\oplus L_5)$, where $X$ is the connected threefold fixed by the chosen one-dimensional subtorus $\mathbb C_q^\times\subset T$, which acts on $L_4$ with weight $q$ and on $L_5$ with weight $q^{-1}$. Under the source’s splitting $T\cong\mathbb C_q^\times\times T'$, the conjecture uses the lift of Conjecture 1.5 and the change of variables in (11). The paper’s abstract reports a proof for strip geometries under restricted torus actions and numerical tests for general torus actions; these results do not prove the general conjecture.

These reports retain their cited source scopes and reading limits. The statement-level theorems are not locally reconstructed proofs, and the CY5 correspondence remains explicitly conjectural.

Salamon's lecture notes are cited only for the general Hamiltonian Floer orbit and action conventions behind the terminology; they do not support any of the specific frontier assertions above, whose scopes remain those of their named recent sources.

