---
id: lem-arith-separated-translate-gluing
kind: lemma
title: "Separated translate gluing"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-strict-law-translation-and-graph-calculus
  - lem-scheme-zariski-main-factorization-quasi-finite
  - def-s-dense-open-and-s-rational-map
  - lem-s-rational-map-descends-along-faithfully-flat-smooth-maps
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - cor-morphisms-equal-on-dense-open-reduced-source
  - thm-gluing-affine-schemes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 5.3/5 (gluing a translate)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a strictly henselian discrete valuation ring with fraction field $K$ and residue field $k$, let $X$ be a smooth separated finite-type $R$-scheme with a strict $R$-birational group law $m$, and let $a$ be an $R$-section of $X$. Then gluing $X$ to a left translate $X(a)$ along the closed section-translation graph produces a smooth separated finite-type $R$-scheme $X'$ containing $X$ as an $R$-dense open subscheme and extending the strict law $m$ to a strict law on $X'$.

## Facts & Assumptions

**Given:** AC and DC, a strictly henselian discrete valuation ring $R$, a smooth separated finite-type $R$-scheme $X$ with a strict birational group law $m$, and a section $a:\operatorname{Spec}R\to X$.

[F1] For a strict law the graph closure of the section translation has two-coordinate projections that are open immersions with dense images, and section translation is defined at $b$ exactly when the law is defined at $(a,b)$ ([[lem-arith-strict-law-translation-and-graph-calculus]]).

[F2] Gluing along open subschemes is available, and rational maps agree when they agree on schematically dense opens of separated reduced targets and descend along faithfully flat maps ([[thm-gluing-affine-schemes]], [[def-s-dense-open-and-s-rational-map]], [[lem-s-rational-map-descends-along-faithfully-flat-smooth-maps]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[cor-morphisms-equal-on-dense-open-reduced-source]]).

[F3] A separated quasi-finite birational morphism with integral source and normal target is an open immersion, by the finite-birational component argument in [[lem-scheme-zariski-main-factorization-quasi-finite]]. Smooth schemes over a DVR are regular and normal, as established in [F1].

## Proof

**Proof technique:** direct: glue along the translation graph and check the strict-law conditions on the pieces.

1.1 Let $\Gamma\subseteq X\times_RX$ be the graph closure of the section translation $t_a$; by [F1] its two projections are open immersions onto $R$-dense open subschemes. Gluing $X$ to a copy $X(a)$ along $\Gamma$ is therefore gluing along an open subscheme, giving a smooth finite-type $R$-scheme $X'$ containing $X$ as an $R$-dense open subscheme; the closedness of the graph in the separated product makes $X'$ separated. [F1, F2, given, construct]

2.1 Write $j:X\xrightarrow{\sim}X(a)$ for the canonical copy map, which extends the left translation by $a$ on its original domain. Let $U$ be the strict-law domain in $X^2$, with translation images $V$ and $W$. On $U_1=(j\times\operatorname{id})(U)$ define $m'(j(x),y)=j(m(x,y))$. On $U_2\subset X\times X(a)$, consisting of $(x,j(y))$ with $(x,a)\in U$ and $(m(x,a),y)\in U$, define $m'(x,j(y))=m(m(x,a),y)$. Together with $m$ on $U$ these morphisms agree on overlaps by associativity and schematic density [F2], and give $m'$ on $U'=U\cup U_1\cup U_2$. For any fixed $y$, strictness makes the conditions on $x$ in $U_2$ dense: right translation by $a$ is birational, and the domain of right translation by $y$ is dense. Thus $U_2$ is dense along its second projection. The domains $U$ and $U_1$ are dense along the first projection; since $X$ is fibre-dense in $X'$, these facts make $U'$ dense along both projections of $(X')^2$. No definition on the whole fourth chart $X(a)^2$ is needed for this density assertion. [F1, F2, step 1.1, construct]

3.1 The universal translations on each of $U,U_1,U_2$ are open immersions: on $U_1$ conjugate the original translations by the copy isomorphism $j$; on $U_2$ compose the original translations with the open-immersion right translation by $a$ and with $j$. Hence the glued translations are quasi-finite. They are birational and separated, and their source and target are regular componentwise; [F3] makes them open immersions. The left-translation image contains $V$ and $(j\times j)(V)$, so it is dense along both projections. The right-translation image contains $W$ and $(j\times\operatorname{id})(W)$, giving first-projection density and second-projection density over $X$. Over a second coordinate $j(y)$, its image from $U_2$ is the set of products $(xa)y$ on the dense domain just described; the composite of the birational right translations by $a$ and $y$ has dense image in $X$, hence in $X'$. This gives second-projection density over $X(a)$ as well. Thus $m'$ is strict. Associativity follows from its agreement with $m$ on schematically dense domains. [F1, F2, F3, step 2.1, algebra] ∎
