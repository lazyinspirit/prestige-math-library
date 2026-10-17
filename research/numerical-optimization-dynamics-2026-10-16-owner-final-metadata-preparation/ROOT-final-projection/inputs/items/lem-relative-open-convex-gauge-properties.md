---
id: lem-relative-open-convex-gauge-properties
kind: lemma
title: The open convex gauge is sublinear and recovers its set
status: published
origin: pipeline
deps: [def-relative-open-convex-gauge, def-sublinear-functional, lem-inf-epsilon]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

Let $U$ be an open convex neighbourhood of zero in a real or complex normed space $X$, and fix $r>0$ with $B(0,r)\subseteq U$. Its gauge satisfies
$$0\le p_U(x)\le\|x\|/r,\qquad p_U(tx)=tp_U(x)\quad(t\ge0),$$
$$p_U(x+y)\le p_U(x)+p_U(y),\qquad U=\{x:p_U(x)<1\},$$
$$|p_U(x)-p_U(y)|\le\|x-y\|/r.$$
In particular it is a sublinear functional on the underlying real space. No symmetry identity is asserted.

## Facts & Assumptions

[F1] $p_U(x)=\inf S_x$ for the nonempty positive admissible-scale set $S_x$, and $p_U(0)=0$ ([[def-relative-open-convex-gauge]]).

[F2] For a nonempty lower-bounded real set and a lower bound $l$, one has $l=\inf S$ if and only if for each $\varepsilon>0$ there is $s\in S$ with $s<l+\varepsilon$ ([[lem-inf-epsilon]]).

[F3] Sublinearity means subadditivity and homogeneity for every real scalar at least zero ([[def-sublinear-functional]]).

## Proof

**Given:** An open convex $U\subseteq X$ with $0\in U$ and $r>0$ such that $B(0,r)\subseteq U$.

1.1 Write $p=p_U$. The gauge definition gives $p(x)\ge0$. For every $t>\|x\|/r$ one has $x/t\in B(0,r)\subseteq U$, so $p(x)\le t$. If $p(x)>\|x\|/r$, their midpoint is such a $t$ smaller than $p(x)$, impossible. Hence $p(x)\le\|x\|/r$. [given, F1, algebra]

1.2 For $a>0$, the condition $s\in S_{ax}$ is equivalent to $s/a\in S_x$, so $S_{ax}=aS_x$. The number $ap(x)$ is a lower bound of this set. Conversely, for every $\varepsilon>0$, choose $t\in S_x$ with $t<p(x)+\varepsilon/a$; then $at\in S_{ax}$ and $at<ap(x)+\varepsilon$. The infimum criterion gives $p(ax)=ap(x)$. For $a=0$, both sides are zero by $p(0)=0$. [F1, F2, algebra]

1.3 If $s>p(x)$, choose $s'\in S_x$ with $s'<s$ using the infimum criterion with $\varepsilon=s-p(x)$. Since $0<s'/s<1$, convexity and $0\in U$ give $x/s=(s'/s)(x/s')+(1-s'/s)0\in U$. Thus every $s>p(x)$ is admissible. [F1, F2, algebra]

1.4 If $p(x)<1$, choose $s\in S_x$ with $s<1$ using the infimum criterion with $\varepsilon=1-p(x)$. Then $0<s<1$ and $x=s(x/s)+(1-s)0\in U$ by convexity. [F1, F2, algebra]

2.1 Given $\varepsilon>0$, set $s=p(x)+\varepsilon$ and $t=p(y)+\varepsilon$. Both are positive and admissible by step 1.3. Convexity gives $(x+y)/(s+t)=(s/(s+t))(x/s)+(t/(s+t))(y/t)\in U$. Hence $p(x+y)\le s+t=p(x)+p(y)+2\varepsilon$. If the desired inequality failed with positive difference $d$, taking $\varepsilon=d/4$ would give $d\le d/2$. Therefore $p(x+y)\le p(x)+p(y)$. Together with step 1.2, this is sublinearity on the real space. [step 1.2, step 1.3, F1, F3, algebra]

2.2 Conversely, let $x\in U$. For $x=0$, $p(x)=0<1$. If $x\ne0$, openness gives $\eta>0$ with $B(x,\eta)\subseteq U$. Put $d=\eta/(2\|x\|)>0$. Since $\|(1+d)x-x\|=\eta/2$, $(1+d)x\in U$, so $1/(1+d)\in S_x$ and $p(x)\le1/(1+d)<1$. This proves both inclusions in the asserted set equality. [step 1.4, F1, algebra]

3.1 Subadditivity gives $p(x)-p(y)\le p(x-y)\le\|x-y\|/r$ and, with $x,y$ interchanged, $p(y)-p(x)\le p(y-x)\le\|x-y\|/r$. These two real inequalities yield the Lipschitz bound. When $x=y$ both differences are zero; no use of $p(-v)=p(v)$ occurs. [step 1.1, step 2.1, algebra] ∎

## Source notes

Brezis Lemma 1.2, p.6, full proof; Teschl Lemma 5.1, p.138, full proof.
