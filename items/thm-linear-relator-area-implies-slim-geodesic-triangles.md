---
id: "thm-linear-relator-area-implies-slim-geodesic-triangles"
kind: "theorem"
title: "Linear algebraic relator area implies slim Cayley triangles"
status: published
origin: "pipeline"
deps: ["lem-relator-disks-give-area-controlled-coarse-fillings", "lem-coarse-triangle-minsize-is-bounded-by-square-root-area", "thm-sublinear-triangle-minsize-implies-hyperbolicity", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §9.7.4, Theorem 9.100 and Proposition 9.103; §11.20, Proposition 11.167(a)"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let a finite presentation have relator lengths at most $L\geq0$ and satisfy $\operatorname{Area}(w)\leq K|w|$ for every null word, with $K\geq0$. Its unit-edge metric Cayley realization $X$ has uniformly slim geodesic triangles. More precisely, writing $m_X(P)$ for the supremum of minsize over triangles of perimeter at most $P$, one has
$$m_X(P)\leq A(K,L)\sqrt{P+7}+B(L)\quad(P\geq0),$$
where $r=\max(1,L)$, $C(L)=20(L+1)$, $A(K,L)=2r\sqrt{C(L)(K+2)}$, and $B(L)=2r+10$.

## Facts & Assumptions

**Given:** Assume AC and fix the presentation, $K,L\geq0$.

[F1] The realization is geodesic; a perimeter-$p$ triangle has a marked word of length $n\leq p+6$, a filling with $N\leq C(L)(\operatorname{Area}(w)+n+1)$, and vertex-side Hausdorff error at most $3$. ([[lem-relator-disks-give-area-controlled-coarse-fillings]]).

[F2] Such a filling and error $e$ imply minsize at most $2r\sqrt N+2r+2e$. ([[lem-coarse-triangle-minsize-is-bounded-by-square-root-area]]).

[F3] Under AC a geodesic space with sublinear triangle-minsize function has uniformly slim triangles. ([[thm-sublinear-triangle-minsize-implies-hyperbolicity]]).

[F4] AC is assumed, as required by the sublinear criterion. ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For any chosen triangle of perimeter $p$, its approximating word is null. The assumed area inequality and F1 give $$N\leq C(L)((K+1)n+1)\leq C(L)((K+1)(p+6)+1)\leq C(L)(K+2)(p+7).$$ The last inequality follows by subtracting the left inner expression from the right: the difference is $p+K+7\geq0$. All constants are nonnegative. [given, F1, algebra]

2.1 Apply F2 with $e=3$. The triangle minsize is at most $$2r\sqrt{C(L)(K+2)}\sqrt{p+7}+2r+6\leq A(K,L)\sqrt{p+7}+B(L).$$ For $p\leq P$ this is at most the same expression with $P$. Taking the supremum over those triangles proves the asserted bound for $m_X(P)$, including $P=0$. [step 1.1, F2, algebra]

3.1 Set $F(P)=A(K,L)\sqrt{P+7}+B(L)$. This function is nonnegative and nondecreasing. For $P\geq1$, $$0\leq F(P)/P\leq A(K,L)\sqrt8/\sqrt P+B(L)/P.$$ Given $\varepsilon>0$, taking $P$ larger than $1$, $(2A(K,L)\sqrt8/\varepsilon)^2$, and $2B(L)/\varepsilon$ makes the right side at most $\varepsilon$. Thus $F(P)/P\to0$, and step 2.1 gives $m_X(P)/P\to0$. [step 2.1, algebra]

4.1 F1 establishes that $X$ is geodesic, and step 3.1 verifies precisely the sublinearity hypothesis of F3. Under the assumed AC, F3 therefore yields a finite slimness constant for all chosen geodesic triangles of $X$. The displayed $A,B$ depend only on $K,L$; a common slimness constant across presentations requires the separate uniformity argument. [F1, F3, F4, step 3.1] ∎
