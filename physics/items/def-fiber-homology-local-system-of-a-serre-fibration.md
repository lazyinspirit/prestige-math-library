---
id: def-fiber-homology-local-system-of-a-serre-fibration
kind: definition
title: Fiber homology local system of a Serre fibration
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-serre-fibration-replacement-preserves-fiber-homology-transport, def-fundamental-groupoid-of-a-space, def-local-system-of-r-modules-and-its-pullback, lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems, prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent, thm-universal-coefficient-theorem-for-cohomology-over-a-pid, def-axiom-of-choice]
proof_strategy: definition
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Chapter 5, generalizations after Theorem 5.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "§5.1, local-coefficient generalization after Theorem 5.3, printed p. 531"
---

## Definition

Let $p:E\to B$ be a Serre fibration, $R$ a commutative unital ring, and $q\ge 0$ an integer. Let $p_p:E_p\to B$ be the canonical mapping-path Hurewicz replacement, and let $j_b:F_b\to F'_b=(p_p)^{-1}(b)$ be the strict-fiber comparison. Write
$$J_{b,q}:H_q(F_b;R)\xrightarrow{\cong}H_q(F'_b;R)$$
for the isomorphism of [[lem-serre-fibration-replacement-preserves-fiber-homology-transport]]. The **fiber-homology local system** is the functor
$$\mathcal H_q(p;R):\Pi_1(B)\longrightarrow R\text{-}\mathsf{Mod}$$
defined on objects by $\mathcal H_q(p;R)(b)=H_q(F_b;R)$ and on an endpoint-fixed path class $[\gamma:b\to c]$ by
$$\mathcal H_q(p;R)([\gamma])=J_{c,q}^{-1}\,H_q(T_\gamma;R)\,J_{b,q}.$$
This homological definition is choice-free. Its identity, path-homotopy, composition, and inverse laws are transported from the Hurewicz local system in [[lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems]], with the underlying transport laws supplied directly by [[prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent]].

For cohomology, assume the Axiom of Choice as in [[def-axiom-of-choice]]. Apply [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]] over $\mathbb Z$ to the comparison $j_b$. Naturality, together with its integral-homology isomorphisms, makes
$$K_b=j_b^*:H^q(F'_b;R)\xrightarrow{\cong}H^q(F_b;R)$$
an isomorphism. The **fiber-cohomology local system** is
$$\mathcal H^q(p;R):\Pi_1(B)\longrightarrow R\text{-}\mathsf{Mod},\qquad \mathcal H^q(p;R)(b)=H^q(F_b;R),$$
with
$$\mathcal H^q(p;R)([\gamma:b\to c])=K_c\,H^q(T_{\bar\gamma};R)\,K_b^{-1}.$$
The reversed path compensates for cohomological contravariance, so the result is again covariant on the fundamental groupoid in the sense of [[def-fundamental-groupoid-of-a-space]] and [[def-local-system-of-r-modules-and-its-pullback]].

For a strictly commuting square of Serre fibrations, functoriality of the mapping-path construction and the Hurewicz systems gives a natural transformation in the forward direction for $\mathcal H_q$ and in the reverse coefficient direction for $\mathcal H^q$. Empty strict fibers give zero stalks and remain empty along their base component; point fibers and $q=0$ use the same formulas. If $R$ is the zero ring, both local systems are zero. No cohomological construction is claimed here without its stated AC hypothesis.
