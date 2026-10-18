---
id: lem-a1-hecke-zero-section-excess-coefficients
kind: lemma
title: "Excess intersection computes the A1 Hecke coefficients"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - lem-a1-arbitrary-framing-cotangent-hecke-model
  - def-refined-gysin-pullback-for-regular-embeddings
  - lem-zero-section-gysin-and-excess-vector-subbundle
  - lem-operational-chern-classes-and-whitney-formula
  - thm-projective-bundle-formula-for-chow-groups
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hiraku Nakajima, Introduction to quiver varieties—for ring and representation theorists"
      url: "https://arxiv.org/pdf/1611.10000v1"
      locator: "Example 10 and §§4.2–4.5; local A1 proofs below supply the geometry and intersection calculations"
    - title: "The Stacks Project, Chow Homology and Chern Classes"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Sections 42.36–42.44 and 42.53–42.59; the proved local Chow suppliers are explicit dependencies"
---

## Statement

Use $X_v,M_v,L_v,Y_v,Z_v,q,r,\mathcal K_v$ and $a_v$ from
[[lem-a1-arbitrary-framing-cotangent-hecke-model]]. All Chow groups have
rational coefficients. Intersect the fundamental cycle $[Z_v]$ with the
source zero section $L_v\times M_{v+1}\hookrightarrow M_v\times M_{v+1}$
by its refined Gysin map, keeping support on $Y_v$, and push along $r$.
The result is
$$r_*\bigl(c_v(\Omega_{Y_v/X_{v+1}})\cap[Y_v]\bigr) =(-1)^v(v+1)[X_{v+1}]\in A_{a_{v+1}}(L_{v+1})_{\mathbb Q}.$$
For the reversed correspondence, intersection with the other zero section
and push along $q$ gives
$$q_*\bigl(c_{w-v-1}(\Omega_{Y_v/X_v})\cap[Y_v]\bigr) =(-1)^{w-v-1}(w-v)[X_v]\in A_{a_v}(L_v)_{\mathbb Q}.$$
These are supported intersection calculations; they do not replace supported
classes by their potentially noninjective pushforward into $A_*(M_v)$.
The excess and Euler sequences used below are equivariant for
$\operatorname{GL}(W)$, although the asserted coefficient formulas are in
ordinary Chow groups.

## Facts & Assumptions

**Given:** $w\ge1$ and $0\le v<w$, the cotangent and incidence models,
and the ordinary supported Chow convention in the statement.

[F1] The models and projective projections, including their dimensions,
are proved in [[lem-a1-arbitrary-framing-cotangent-hecke-model]].

[F2] A regular embedding after arbitrary base change has the refined
excess formula, with top Chern class of the quotient normal bundle
([[def-refined-gysin-pullback-for-regular-embeddings]],
[[lem-zero-section-gysin-and-excess-vector-subbundle]]).

[F3] Operational Chern classes satisfy Whitney and the splitting
principle; projective-bundle pushforward kills hyperplane powers below
the fiber dimension and sends the power of that dimension to the base
class ([[lem-operational-chern-classes-and-whitney-formula]],
[[thm-projective-bundle-formula-for-chow-groups]]).

## Proof

1.1 The source zero-section embedding has codimension $a_v$ and normal bundle $\operatorname{pr}_1^*T^*X_v$. Its pullback to $Z_v$ is the zero section $Y_v\hookrightarrow\operatorname{Tot}\mathcal K_v$, with normal bundle $\mathcal K_v$ of rank $k=v(w-v-1)$. The normal map is the fiber inclusion of common $A$ into $q^*T^*X_v$. There is a canonical exact sequence $$0\longrightarrow\mathcal K_v\longrightarrow q^*T^*X_v \longrightarrow\Omega_{Y_v/X_{v+1}}\longrightarrow0.$$ Indeed tangent vectors to an $r$-fiber move $S$ inside fixed $T$; restriction of cotangent forms is the surjection dual to $T_{Y_v/X_{v+1}}\hookrightarrow q^*T X_v$. Its kernel consists exactly of $A:W/S\to S$ annihilating $T/S$, namely $\operatorname{Hom}(W/T,S)$. Thus the excess has rank $a_v-k=v$. The excess formula [F2] gives the first intersection class, of dimension $\dim Y_v-v=a_{v+1}$. [F1, F2, algebra]

1.2 For any quotient projective bundle $p:\mathbb P(B)\to T$ of rank $n+1$, put $h=c_1(\mathcal O(1))$. Its relative Euler sequence is $$0\longrightarrow\Omega_p\longrightarrow p^*B\otimes\mathcal O(-1) \longrightarrow\mathcal O\longrightarrow0.$$ The middle map evaluates the tautological quotient after tensoring by its inverse line; its kernel is the relative cotangent bundle, as one checks on a chart where one quotient coordinate is $1$. Thus [F3] gives $c_n(\Omega_p)=\sum_{i=0}^n(-1)^{n-i}(n+1-i)p^*c_i(B)h^{n-i}$: on the splitting tower the roots are $b_j-h$, and in choosing a monomial with $i$ roots $b_j$ the remaining $n-i$ choices can be made in $n+1-i$ ways. Pushforward kills every $i>0$ term, since its hyperplane exponent is below $n$, and sends $h^n$ to $1$. Consequently $p_*(c_n(\Omega_p)\cap[\mathbb P(B)])=(-1)^n(n+1)[T]$. This also covers $n=0$. [F3, algebra]

2.1 In the other direction the same restriction to tangent vectors of a $q$-fiber gives $$0\longrightarrow\mathcal K_v\longrightarrow r^*T^*X_{v+1} \longrightarrow\Omega_{Y_v/X_v}\longrightarrow0.$$ A tangent vector moves $T$ while fixing $S$; annihilating all these variations forces the cotangent endomorphism with kernel $T$ to have image in $S$. This is again $\mathcal K_v$. Its excess rank is $a_{v+1}-k=w-v-1$, giving the second intersection class of dimension $\dim Y_v-(w-v-1)=a_v$. Neither exact sequence presumes a global splitting. [F1, F2, step 1.1, algebra]

3.1 Apply step 1.2 first to $r$, the quotient projective bundle of the rank-$(v+1)$ tautological bundle on $X_{v+1}$, with $n=v$; then apply it to $q$, the bundle of lines in $W/\mathcal S$, equivalently the quotient projective bundle of $(W/\mathcal S)^*$, with $n=w-v-1$. Steps 1.1–1.2 give exactly the two asserted coefficients. All maps in the normal and Euler sequences are canonical restrictions, evaluations or differentials of equivariant projections, hence are $\operatorname{GL}(W)$-equivariant. No equivariant Chern parameter has been specialized silently: all pushforward identities just used are ordinary Chow identities. [F1, step 1.1, step 2.1, step 1.2, algebra] ∎

