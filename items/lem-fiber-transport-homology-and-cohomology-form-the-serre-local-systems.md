---
id: lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems
kind: lemma
title: Fiber transport gives the Serre local systems
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-fiber-transport-and-monodromy-action, def-local-system-of-r-modules-and-its-pullback, thm-singular-chain-homotopy-formula, def-singular-cochain-complex-with-coefficients]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §3, pp.103–107
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Let $p:E\to B$ be a Hurewicz fibration, $F_b=p^{-1}(b)$, $R$ a commutative unital ring, and $q\ge0$. The assignments
$$b\longmapsto H_q(F_b;R),\qquad [\gamma:b\to c]\longmapsto H_q(T_\gamma;R)$$
and
$$b\longmapsto H^q(F_b;R),\qquad [\gamma:b\to c]\longmapsto H^q(T_{\bar\gamma};R)$$
are $R$-module local systems on $B$. Thus cohomology uses transport along the reversed path before applying contravariance.

For a commutative square of fibrations with total map $u:E\to E'$ over $f:B\to B'$, the fiber maps induce a natural transformation from the homology system of $p$ to the pullback of that of $p'$, and a natural transformation in the reverse coefficient direction from the pullback of the cohomology system of $p'$ to that of $p$.

## Facts & Assumptions

**Given:** The fibration, coefficient ring, degree, and, for functoriality, the commutative square in the statement.

[F1] [[def-fiber-transport-and-monodromy-action]] proves that the homotopy class of $T_\gamma$ depends only on $[\gamma]$, that $T_{\gamma*\eta}\simeq T_\eta T_\gamma$, and that $T_{\bar\gamma}$ is a fiber-homotopy inverse to $T_\gamma$.

[F2] [[thm-singular-chain-homotopy-formula]] says homotopic maps induce chain-homotopic singular chain maps.

[F3] [[def-singular-cochain-complex-with-coefficients]] defines cochains by applying $\operatorname{Hom}(-,R)$ to singular chains, with positive coboundary.

[F4] [[def-local-system-of-r-modules-and-its-pullback]] identifies the required conclusion with functorial transport on the fundamental groupoid.

## Proof

**Proof technique:** direct.

1.1 If maps $a_0,a_1:X\to Y$ are homotopic, [F2] supplies $a_{1\#}-a_{0\#}=\partial P+P\partial$. Hence they induce the same map in homology. Precomposition with this equality gives $a_1^*-a_0^*=\delta P^*+P^*\delta$ on cochains, where $(P^*\varphi)(c)=\varphi(Pc)$; thus they induce the same map in cohomology as well. A homotopy equivalence therefore induces isomorphisms in both theories. [F2, F3]

2.1 For homology, path-homotopy invariance and composition follow from [F1] and step 1.1: $H_q(T_{\gamma*\eta})=H_q(T_\eta)H_q(T_\gamma)$. Constant paths give identity maps in homology even if the chosen lifting function is not regular, because [F1] makes their transports homotopic to the identity. Reversed paths give inverse maps. This is the covariant groupoid functor required by [F4]. [F1, F4, step 1.1]

2.2 Define cohomology transport along $\gamma:b\to c$ to be $S_\gamma=H^q(T_{\bar\gamma}):H^q(F_b;R)\to H^q(F_c;R)$. Since $\overline{\gamma*\eta}=\bar\eta*\bar\gamma$, [F1] gives $T_{\overline{\gamma*\eta}}\simeq T_{\bar\gamma}T_{\bar\eta}$. Contravariance and step 1.1 then give $S_{\gamma*\eta}=S_\eta S_\gamma$. Constants give identities, and $S_{\bar\gamma}$ is inverse to $S_\gamma$. Thus this too is a covariant fundamental-groupoid functor. [F1, F3, F4, step 1.1]

3.1 In the commutative square, write $u_b:F_b\to F'_{f(b)}$. For a path $\gamma:b\to c$, the two maps $u_cT_\gamma$ and $T'_{f\gamma}u_b$ are fiber transports over the same base path with the same initial fiber map. The lifting comparison in [F1] gives a vertical homotopy between them. Step 1.1 therefore gives $H_q(u_c)H_q(T_\gamma)=H_q(T'_{f\gamma})H_q(u_b)$, exactly naturality of $H_q(F_b)\to H_q(F'_{f(b)})$. [F1, F4, step 1.1, step 2.1]

3.2 Apply the same comparison to $\bar\gamma$. Contravariance gives $H^q(T_{\bar\gamma})H^q(u_b)=H^q(u_c)H^q(T'_{\overline{f\gamma}})$ as maps from $H^q(F'_{f(b)};R)$ to $H^q(F_c;R)$. This is naturality of the stalk maps $H^q(u_b):H^q(F'_{f(b)};R)\to H^q(F_b;R)$ from the pulled-back cohomology system to the source system. [F1, F3, F4, step 1.1, step 2.2]

4.1 Empty fibers give zero modules, and [F1] makes emptiness constant along each path component; point fibers and $q=0$ obey the same formulas. The zero ring gives zero systems. Disconnected bases are handled componentwise. A universal lifting function is one supplied map, and all subsequent transports and prism homotopies concern specified paths or maps; no family of representatives is selected, so no AC is used. [F1, step 2.1, step 2.2, step 3.1, step 3.2] ∎
