---
id: thm-reduced-k-theory-exact-sequence-of-a-cofibration
kind: theorem
title: Reduced K-theory exact sequence of a cofibration
status: published
origin: pipeline
deps: [def-reduced-complex-k-theory, prop-k-zero-is-contravariantly-functorial-and-homotopy-invariant, prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases, thm-finite-rank-complement-theorem-over-compact-hausdorff-bases, def-reduced-cone-suspension-and-cofiber-sequence, thm-tietze-extension-theorem, cor-compact-hausdorff-partitions-of-unity, lem-ac-supplies-dependent-choice-for-vector-bundle-constructions, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 2.9"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Exactness by extension of a stable trivialization, printed pp.51–53"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §§1–2"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Reduced KU exactness and suspension, printed pp.203–208"
---

## Statement

Assume AC. If $A\hookrightarrow X$ is a closed based cofibration of compact
Hausdorff well-pointed CGWH spaces, restriction and quotient induce an exact
sequence

$$\widetilde K^0(X/A)\longrightarrow\widetilde K^0(X)\longrightarrow\widetilde K^0(A).$$

Applying the same construction to the successive mapping cones in the fixed
cofiber convention gives the exact sequence continuing indefinitely to the
left through reduced suspensions. In particular, the statement applies to
finite CW pairs; no positive-degree or desuspension groups are asserted here.

## Facts & Assumptions

**Given:** AC and a closed based cofibration $i:A\hookrightarrow X$ as in the statement; write $q:X\to X/A$.

[F1] Reduced $K^0$ is the kernel of basepoint restriction ([[def-reduced-complex-k-theory]]) and is contravariantly homotopy invariant ([[prop-k-zero-is-contravariantly-functorial-and-homotopy-invariant]]).

[F2] The reduced mapping-cone sequence and its reflection signs are fixed in [[def-reduced-cone-suspension-and-cofiber-sequence]].

[F3] Equality in $K^0$ is equivalent, under AC, to actual isomorphism after a common trivial stabilization ([[prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases]]), and a finite-rank bundle over a compact Hausdorff base has a finite complement ([[thm-finite-rank-complement-theorem-over-compact-hausdorff-bases]]).

[F4] Under DC, bounded real coordinate functions on a closed subset of a normal space extend ([[thm-tietze-extension-theorem]]).

[F5] Under AC and DC, a compact Hausdorff open cover has a finite subordinate partition of unity ([[cor-compact-hausdorff-partitions-of-unity]]).

[F6] AC supplies every prescribed dependent-choice sequence needed in [F4] and [F5] ([[lem-ac-supplies-dependent-choice-for-vector-bundle-constructions]]).

[A1] AC is used in [F3] and, through [F6], in [F4] and [F5].

## Proof

**Proof technique:** direct.

1.1 Since $q\circ i$ is the constant map to the collapsed basepoint, [F1] gives $i^*q^*=0$ on reduced groups. Hence the image of $q^*$ lies in the kernel of $i^*$. [F1]

1.2 Let $u\in\widetilde K^0(X)$ satisfy $i^*u=0$, and let $\rho_u:X\to\mathbb Z$ be its locally constant virtual-rank function.  The nonzero-rank locus $C=\rho_u^{-1}(\mathbb Z\setminus\{0\})$ is clopen and disjoint from $A$; put $D=X\setminus C$.  Both are compact, and $q$ restricts to a homeomorphism $C\cong q(C)$, with $q(C)$ clopen in $X/A$.  Thus the summand $u|_C$ already descends across $q$, and it remains to descend the zero-rank class $u|_D$. [F1, algebra]

2.1 Write $u|_D=[P]-[Q]$.  Refine the finite clopen rank decompositions of $P$ and $Q$; zero virtual rank says their ranks agree on each piece.  Apply [F3]'s complement theorem on every piece and enlarge the finitely many trivial ambient bundles to one common dimension $n$.  The piecewise complements glue to a bundle $Q'$ with $Q\oplus Q'\cong\varepsilon^n$, while $E=P\oplus Q'$ has the constant rank $n$.  Hence $u|_D=[E]-[\varepsilon^n]$.  Since $i^*u=0$, [F3]'s stable-isomorphism criterion on $A$ allows a further common trivial summand so that $E|_A\cong A\times\mathbb C^n$ by an actual supplied trivialization $\tau$; rename the enlarged rank as $n$. [F3, A1, step 1.2, algebra, choose]

3.1 Extend the bundle map $\tau:A\times\mathbb C^n\to E|_A$ to a neighborhood of $A$ in $D$. Concretely, choose finitely many bundle charts over $D$, express the finitely many frame vectors of $\tau$ by bounded real and imaginary coordinate functions on the closed chart pieces, extend those functions by [F4], and combine the local extensions by the finite partition in [F5]. The resulting $n$ sections agree with $\tau$ on $A$. Their exterior product is nonzero on $A$, so continuity gives an open neighborhood $U$ of $A$ in $D$ on which they are a frame. Thus $E|_U$ has a trivialization extending $\tau$. Here [F6] discharges the DC hypotheses from the single assumption AC. [F4, F5, F6, A1, step 2.1, construct]

4.1 Form a bundle $\bar E$ on $q(D)=D/A$: away from the collapsed point use the charts of $E$ on $D\setminus A$, and over $q(U)$ use the trivialization in step 3.1, identifying every fiber above $A$ with the same copy of $\mathbb C^n$. On overlaps the transition matrices are the old continuous ones, expressed in this frame, so the quotient charts glue to a rank-$n$ bundle. Pulling back gives $q^*\bar E\cong E$ over $D$, with the chosen trivialization over $A$. Therefore $v_D=[\bar E]-[\varepsilon^n]$ is reduced at the quotient basepoint and pulls back to $u|_D$.  On the disjoint clopen part $q(C)$ put $v_C=((q|_C)^{-1})^*(u|_C)$.  The two virtual bundles assemble over the finite clopen decomposition $X/A=q(C)\amalg q(D)$ to a reduced class $v$ with $q^*v=u$. This proves $\ker i^*\subseteq\operatorname{im}q^*$ and, with step 1.1, exactness. [F1, step 1.2, step 2.1, step 3.1, construct, algebra]

5.1 Replace $i$ by its mapping-cylinder inclusion, which is a closed cofibration with the same homotopy cofiber. The cone base inside each successive reduced mapping cone is again a closed cofibration of compact Hausdorff well-pointed CGWH spaces. Applying steps 1.1–4.1 at every stage gives exactness at every term. The quotient identifications in [F2] identify the successive quotients with reduced suspensions; using its reflection maps gives exactly the recorded signs $-\Sigma i$, $-\Sigma q$, and thereafter their suspended alternation. Homotopy invariance in [F1] transports exactness across these identifications. [F1, F2, step 1.1, step 4.1]

6.1 A finite CW subcomplex inclusion satisfies the stated compactness, Hausdorff, CGWH, well-pointed, and closed-cofibration hypotheses, so the result specializes to finite CW pairs. [step 5.1] ∎
