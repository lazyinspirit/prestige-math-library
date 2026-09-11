---
id: "lem-continuous-gauge-of-an-open-convex-zero-neighborhood"
kind: "lemma"
title: "Continuity, sublinearity and strict sublevels of an open convex gauge"
status: published
origin: "pipeline"
deps: ["def-minkowski-gauge-of-an-open-convex-zero-neighborhood", "lem-topological-vector-space-translation-scaling-and-absorption", "def-locally-convex-topological-vector-space", "def-sublinear-functional", "thm-infimum-property"]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (17 November 2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: "phase-2-next-20"
proof_strategy: "direct"
---

## Statement

Let $U$ be an open convex zero-neighborhood in a real or complex TVS. Its gauge $p=p_U$ is finite, nonnegative, subadditive, positively real-homogeneous and continuous. Moreover
$$U=\{x:p(x)<1\}.$$
If $U$ is balanced, then $p(\lambda x)=|\lambda|p(x)$ for every scalar, so $p$ is a continuous seminorm. It need not be positive definite.

## Facts & Assumptions

**Given:** An open convex zero-neighborhood $U$ and its gauge $p$.

[F1] The gauge is the finite nonnegative infimum of admissible positive dilations, with $p(0)=0$ ([[def-minkowski-gauge-of-an-open-convex-zero-neighborhood]]).

[F2] An infimum is a greatest lower bound ([[thm-infimum-property]]).

[F3] Orbit maps are continuous and nonzero dilations and translations are homeomorphisms ([[lem-topological-vector-space-translation-scaling-and-absorption]]).

[F4] Convexity, balance and seminorms use the conventions of [[def-locally-convex-topological-vector-space]].

[F5] Sublinearity means subadditivity and homogeneity for nonnegative real scalars ([[def-sublinear-functional]]).

## Proof

1.1 Write $S_x=\{t>0:x\in tU\}$. If $t\in S_x$ and $a\ge t$, then $x/a=(t/a)(x/t)+(1-t/a)0\in U$, so $a\in S_x$. If $a>p(x)$, it cannot be a lower bound of $S_x$; hence some $t\in S_x$ satisfies $t<a$, and then $a\in S_x$. This uses only the defining greatest-lower-bound property, not an assumption that the infimum is attained. [F1, F2, F4]

2.1 For $r>0$, $S_{rx}=rS_x$ by direct substitution, so $p(rx)=rp(x)$: multiplication by $r$ bijects lower bounds of $S_x$ with lower bounds of $rS_x$ and preserves their order. At $r=0$, both sides are zero. For $\eta>0$ put $a=p(x)+\eta$ and $b=p(y)+\eta$. These are positive admissible numbers, and $$(x+y)/(a+b)=\frac{a}{a+b}(x/a)+\frac{b}{a+b}(y/b)\in U.$$ Thus $p(x+y)\le p(x)+p(y)+2\eta$ for every $\eta>0$. If subadditivity failed by a positive gap $d$, take $\eta=d/4$ to contradict this bound. Hence $p$ is sublinear. [F1, F2, F4, F5, step 1.1]

2.2 If $p(x)<1$, choose $a$ with $p(x)<a<1$, for example $(p(x)+1)/2$. It is admissible, and convexity with zero gives $x\in aU\subseteq U$. Conversely, if $x\in U$, continuity of $s\mapsto sx$ at $s=1$ and openness of $U$ give an $\eta>0$ with $(1+\eta)x\in U$. Thus $1/(1+\eta)\in S_x$, and $p(x)\le1/(1+\eta)<1$. These prove both inclusions of the strict-sublevel identity. [F1, F3, F4, step 1.1]

3.1 Given $\varepsilon>0$, the open zero-neighborhood $N=\varepsilon(U\cap(-U))$ has $p(h)<\varepsilon$ and $p(-h)<\varepsilon$ for $h\in N$, by homogeneity and the strict-sublevel identity. Subadditivity gives $p(x+h)-p(x)\le p(h)$ and $p(x)-p(x+h)\le p(-h)$, hence $|p(x+h)-p(x)|<\varepsilon$. Translating $N$ proves continuity at every $x$. This argument does not assert absolute domination by an asymmetric gauge. [F3, step 2.1, step 2.2]

4.1 Suppose $U$ is balanced. For $|a|=1$, balance gives $aU\subseteq U$ and $a^{-1}U\subseteq U$, whence $aU=U$ and $S_{ax}=S_x$. For $\lambda\ne0$, write $\lambda=|\lambda|a$ with $|a|=1$, and obtain $p(\lambda x)=|\lambda|p(ax)=|\lambda|p(x)$. At $\lambda=0$ this follows from $p(0)=0$. Thus the finite nonnegative continuous sublinear $p$ is a seminorm. [F1, F4, step 2.1, step 3.1]

5.1 For concrete boundary calculations on the real line, $U=(-1,1)$ gives $S_x=(|x|,\infty)$ and $p(x)=|x|$, with $S_0=(0,\infty)$. On $\mathbb R^2$ the open strip $U=\{(x,y):|x|<1\}$ gives $p_U(x,y)=|x|$, since admissibility is exactly $t>|x|$; thus $p_U(0,1)=0$ despite $(0,1)\ne0$. These computations show why no positive-definiteness conclusion is available. All claimed properties are established without HB or AC. [F1, step 2.2, step 3.1, step 4.1] ∎