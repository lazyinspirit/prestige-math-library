---
id: "lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic"
kind: "lemma"
title: "Sublinear minsize identifies every cone segment with a limit segment"
status: "draft"
origin: "pipeline"
deps: ["def-rescaled-ultralimit-and-asymptotic-cone", "lem-geodesic-segments-have-isometric-ultralimits", "lem-triangle-extrema-and-real-tree-tripod-rules", "lem-bounded-real-ultralimits-and-free-tail-extension", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §11.21 Lemma 11.177, PDF p.449"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Assume AC. Let $X$ be nonempty and geodesic with $m_X(P)=o(P)$ as $P\to\infty$. In any asymptotic cone, let $a=[a_n]$, $b=[b_n]$. For every choice of original segments $[a_n,b_n]$, their limit is the unique geodesic segment between $a,b$.

## Facts & Assumptions

**Given:** AC, a nonempty geodesic X with sublinear minsize, arbitrary basepoints and positive ordinary-null scales, endpoints a,b and an arbitrary cone segment joining them.

[F1] The cone is geodesic and original sides have isometric represented limits. ([[lem-geodesic-segments-have-isometric-ultralimits]]).

[F2] Minsize is attained for each finite triangle. ([[lem-triangle-extrema-and-real-tree-tripod-rules]]).

[F3] Bounded scaled distances pass sums and order to limits. ([[lem-bounded-real-ultralimits-and-free-tail-extension]]).

[F4] AC supplies countable choices of sides and minimizing triples. ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose any point $c$ on the given cone segment and a representative $c_n$. Keep the prescribed side $[a_n,b_n]$ and choose sides $[a_n,c_n]$, $[c_n,b_n]$ by AC. Their perimeters $P_n$ satisfy $\lambda_nP_n\le H$ for some finite $H$, because all three endpoint sequences are admissible and every side length is an endpoint distance. [F1, F4]

2.1 For $\varepsilon>0$ choose $P_0>0$ such that $m_X(P)\le\varepsilon P$ for $P\ge P_0$. For $P<P_0$, the profile bound $m_X(P)\le P$ gives $m_X(P)\le P_0$. Thus $0\le\lambda_n\operatorname{minsize}(\Delta_n)\le\varepsilon H+\lambda_nP_0$. The last term tends ordinarily to zero, so the scaled minsize tends to zero, with bounded and unbounded perimeters both covered. [step 1.1, given, F3]

3.1 Select a minimizing triple $x_n\in[a_n,b_n]$, $y_n\in[a_n,c_n]$, $z_n\in[c_n,b_n]$. All are admissible because the sides have bounded scaled lengths and bounded endpoints. By step 2.1 their three classes coincide at a point $x$. Exact distance additivity on the other two sides gives $d(a,c)=d(a,x)+d(x,c)$ and $d(c,b)=d(c,x)+d(x,b)$. [step 1.1, step 2.1, F1, F2, F3, F4]

4.1 Since $c$ belongs to the cone segment, $d(a,b)=d(a,c)+d(c,b)=d(a,x)+2d(x,c)+d(x,b)\ge d(a,b)+2d(x,c)$. Nonnegativity forces $d(x,c)=0$, so $c=x$ lies on the prescribed side limit. This holds for every $c$ on every cone segment joining $a,b$. [step 3.1, algebra]

5.1 The side limit and any cone segment are both isometric copies of $[0,d(a,b)]$ from $a$ to $b$. Containment from step 4.1 is equality: the point at each distance parameter $t$ on the second lies on the first and must equal its unique point at parameter $t$. If $a=b$, both intervals are a singleton. Hence the segment is unique and is precisely the prescribed limit. [step 4.1, F1] ∎
