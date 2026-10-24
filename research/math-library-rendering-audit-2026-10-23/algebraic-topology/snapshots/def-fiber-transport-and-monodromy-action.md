---
id: "def-fiber-transport-and-monodromy-action"
kind: "definition"
title: "Fiber transport and monodromy action"
deps: ["def-hurewicz-and-serre-fibrations", "def-fiber-and-fiber-homotopy-equivalence", "lem-interval-exponential-law-and-quotient-homotopies", "prop-higher-homotopy-basepoint-transport-and-moving-homotopies", "thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: published
origin: "pipeline"
justified_by: ["prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent"]
---

## Definition

Let $p:E\to B$ be a Hurewicz fibration, in ordinary spaces or in the explicitly chosen CGWH convention. Put $D_p=\{(e,\gamma):p(e)=\gamma(0)\}\subseteq E\times B^I$, with the corresponding path and pullback topology. Evaluation and the interval exponential law of [[lem-interval-exponential-law-and-quotient-homotopies]] make $((e,\gamma),t)\mapsto\gamma(t)$ a continuous homotopy with initial lift $(e,\gamma)\mapsto e$. One application of [[def-hurewicz-and-serre-fibrations]] gives a **universal lifting function** $\Lambda:D_p\times I\to E$ with
$$\Lambda(e,\gamma,0)=e,\qquad p\Lambda(e,\gamma,t)=\gamma(t).$$
It is not assumed regular: $\Lambda(e,c_{p(e)},t)$ may move in its fiber. Selecting this one map is a single existential choice, not an application of AC.

For a path $\gamma:b\to c$, define its **fiber transport** by $T_\gamma:F_b\to F_c$, $T_\gamma(e)=\Lambda(e,\gamma,1)$; fibers have the meaning of [[def-fiber-and-fiber-homotopy-equivalence]]. The following proposition proves that its homotopy class is independent of the lifting function and of endpoint-fixed path homotopy, that $T_{\gamma*\eta}\simeq T_\eta T_\gamma$, and that it is a homotopy equivalence. Those claims, used in the next definitions, are licensed by that declared justifier.

For every abelian coefficient group $G$ and $q\ge0$, the maps $H_q(T_\gamma;G)$ consequently form a **path-groupoid local system**: to each point assign $H_q(F_b;G)$ and to each endpoint-fixed path class assign its induced isomorphism. Here the path groupoid has points as objects and endpoint-fixed path classes as arrows, composed in traversal order. Homology functoriality and invariance are those used in [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]. Restriction to loops at $b$ is **monodromy**, written as a right action $z\cdot[\gamma]=H_q(T_\gamma;G)(z)$ under the first-loop-first convention.

For $n\ge1$, the induced based map instead has type
$$(T_\gamma)_*:\pi_n(F_b,e)\longrightarrow\pi_n(F_c,T_\gamma(e)).$$
It is an isomorphism by homotopy equivalence with moving-basepoint correction. The correction is [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]: a path $a:e'\to T_\gamma(e)$ in $F_c$ gives $\beta_a(T_\gamma)_*$ with target $\pi_n(F_c,e')$. Existence of such a path is additional data; its choice can change the resulting map. To obtain a fixed based group action one must supply endpoint paths with composition compatibility, or prove hypotheses making their effect independent of choices. A homology monodromy action alone supplies neither. Precisely, if $F_b$ is path connected and $\beta_l=\mathrm{id}$ on $\pi_n(F_b,e)$ for every loop $l$ at $e$, define $x\cdot[\gamma]=\beta_a(T_\gamma)_*x$ using any $a:e\to T_\gamma(e)$. The declared justifier proves independence of $a$ and of the lifting function, and the right-action law. This hypothesis applies separately to each $n\ge1$; for $n=1$ it is equivalent to abelianness, and a simply connected fiber satisfies it for every $n$. No unqualified fixed-basepoint action is part of the definition.

Empty fibers are allowed; the following proposition shows emptiness is constant along path components of the base. Point fibers give identity maps on their invariants. No canonical pointwise transport homeomorphism is asserted.
