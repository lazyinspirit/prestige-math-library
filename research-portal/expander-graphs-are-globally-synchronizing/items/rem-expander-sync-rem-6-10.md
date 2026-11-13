---
id: rem-expander-sync-rem-6-10
title: Shifted-root comparison — Remark 6.10
kind: remark
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-rate-function
  - def-expander-sync-shifted-rate-roots
  - prop-expander-prereq-entropy-root-geometry
dependency_roles:
  def-expander-sync-rate-function: mathematical-premise
  def-expander-sync-shifted-rate-roots: mathematical-premise
  prop-expander-prereq-entropy-root-geometry: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 37, Remark 6.10; p. 36, equations (6.7) and (6.8)
      statement: The shifted roots converge to the unshifted roots and satisfy the
        displayed comparison; the remark also states the scalar logarithmic
        bound.
      hypotheses: For the comparison, 0<epsilon<1 and 1+epsilon<gamma<1+epsilon^(-2);
        the limiting assertion fixes gamma>1 and takes epsilon down to zero. The
        scalar bound applies for 0<epsilon<1.
      reading_limits: The supplied article text at the cited pages was inspected for
        attribution. The article is not used as a proof premise.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
---

## Statement

Let $h(c)=(1+c)\log(1+c)-c$ for $c>-1$, where $\log$ is the natural logarithm. For $\gamma>1$, let $c^-(\gamma)\in(-1,0)$ and $c^+(\gamma)>0$ be the respective roots of $\gamma h(c)=1$. For $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, let $c^-(\gamma,\varepsilon)<0$ and $c^+(\gamma,\varepsilon)>0$ be the respective roots of $\gamma h(c-\varepsilon)=1+\varepsilon$ and $\gamma h(c+\varepsilon)=1+\varepsilon$, with positive logarithm arguments. Then

$$-1<c^-(\gamma)\le c^-(\gamma,\varepsilon)<0<c^+(\gamma,\varepsilon)\le c^+(\gamma).$$

For each fixed $\gamma>1$, as $\varepsilon\downarrow0$ through admissible values, $c^\pm(\gamma,\varepsilon)\to c^\pm(\gamma)$. Moreover, for every $0<\varepsilon<1$,

$$1+\varepsilon^{-2}\le\frac{1+\varepsilon}{(1-\varepsilon)\log(1-\varepsilon)+\varepsilon}.$$

## Statement references

[[def-expander-sync-rate-function]]

[[def-expander-sync-shifted-rate-roots]]

## Facts & Assumptions

[F1] The rate-function definition supplies $h$ and the unique unshifted roots on the stated branches ([[def-expander-sync-rate-function]]).

[F2] The shifted-root definition supplies the unique roots of the two shifted equations with their stated signs and positive logarithm arguments ([[def-expander-sync-shifted-rate-roots]]).

[F3] Put $I(a)=a\log a-a+1$ for $a>0$. The entropy-root geometry gives its lower and upper inverse branches $a_-$ and $a_+$, the formulas $c_\pm(\gamma)=a_\pm(1/\gamma)-1$ and $c_\pm(\gamma,\varepsilon)=a_\pm((1+\varepsilon)/\gamma)-1\mp\varepsilon$, their strict inward ordering and their fixed-$\gamma$ limits. It also gives $1+\varepsilon^{-2}<(1+\varepsilon)/I(1-\varepsilon)$ under the stated parameter hypotheses ([[prop-expander-prereq-entropy-root-geometry]]).

## Proof

**Given:** The parameters and roots in the Statement.

**Goal:** Prove the comparison, the limits and the scalar bound.

1.1 Since $h(c)=I(1+c)$, the unique roots in [F1] and [F2] agree with the corresponding branch formulas in [F3]. Under the stated parameter hypotheses, [F3] gives the stronger inequalities $-1<c^-(\gamma)<c^-(\gamma,\varepsilon)<0<c^+(\gamma,\varepsilon)<c^+(\gamma)$, and hence the displayed weak comparisons. For fixed $\gamma>1$, sufficiently small positive $\varepsilon$ are admissible, and [F3] gives both limits. [F1, F2, F3, algebra]

2.1 For any $0<\varepsilon<1$, the interval $(1+\varepsilon,1+\varepsilon^{-2})$ is nonempty because $\varepsilon<\varepsilon^{-2}$. Choose $\gamma$ in that interval. The scalar bound in [F3] applies, and $I(1-\varepsilon)=(1-\varepsilon)\log(1-\varepsilon)+\varepsilon$. Its strict inequality implies the asserted weak inequality. [F3, choose, algebra] ∎

## Source attribution

The notation and assertions are attributed to Remark 6.10 of the cited article. The proof uses the mathematical suppliers above, not the article as a premise.
