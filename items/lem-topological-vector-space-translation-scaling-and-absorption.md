---
id: "lem-topological-vector-space-translation-scaling-and-absorption"
kind: "lemma"
title: "Translations, dilations and absorption in a topological vector space"
status: "draft"
origin: "pipeline"
deps: ["def-topological-vector-space-for-local-convexity", "thm-product-universal-property", "lem-continuity-is-local-and-pastes", "lem-vector-space-elementary-consequences", "lem-complex-conjugation-and-modulus-laws", "lem-of-abs-value", "lem-of-triangle-inequality"]
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
    - title: "Harald Hanche-Olsen, Topological vector spaces, version 1.6 (bibliographic origin; complete local argument replaces unavailable backing)"
      url: "https://hanche.folk.ntnu.no/notes/topvec/topvec-a4.pdf"
pipeline_run: "phase-2-next-20"
proof_strategy: "direct"
---

## Statement

In a real or complex TVS $X$, translations and multiplication by a nonzero scalar are homeomorphisms. Every zero-neighborhood $U$ absorbs every $x$: $x\in tU$ for all sufficiently large positive real $t$. There is a symmetric open zero-neighborhood $W$ with $W+W\subseteq U$. Every scalar-linear functional bounded in modulus on a zero-neighborhood is continuous. Scalar addition and multiplication are jointly continuous in the usual real or complex topology.

## Facts & Assumptions

**Given:** A TVS $X$, a zero-neighborhood $U$, and, for the functional assertion, a scalar-linear $f:X\to\mathbb K$ with $|f(x)|\le M$ on a zero-neighborhood $N$, where $M\ge0$.

[F1] The TVS structure maps are jointly continuous ([[def-topological-vector-space-for-local-convexity]]).

[F2] Maps into products are continuous exactly when their components are continuous ([[thm-product-universal-property]], clauses 1–2 only).

[F3] Composites of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]], clause 1).

[F4] Zero and negative scalar identities hold in a vector space ([[lem-vector-space-elementary-consequences]]).

[F5] Complex modulus is multiplicative and obeys the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]). Real absolute value is multiplicative ([[lem-of-abs-value]]) and obeys the triangle inequality ([[lem-of-triangle-inequality]]).

## Proof

1.1 Constant maps are continuous because the preimage of an open set is empty or the whole domain; identity maps are continuous by their preimages. Thus $x\mapsto(a,x)$ and $x\mapsto(x,a)$ into the appropriate products are continuous. Composing with the structure maps proves continuity of translations $x\mapsto x+a$, fixed dilations $x\mapsto bx$, and the orbit maps $s\mapsto sx$ for fixed $x$. [F1, F2, F3]

2.1 Translation by $-a$ inverts translation by $a$; when $b\ne0$, dilation by $b^{-1}$ inverts dilation by $b$. The vector axioms and zero/negative identities verify these inverse formulas. The inverses are continuous by step 1.1, so these maps are homeomorphisms. Consequently translates of open sets and nonzero dilates of open sets are open. [step 1.1, F4]

2.2 Fix an open $U_0$ with $0\in U_0\subseteq U$. Continuity of $s\mapsto sx$ at $0$, where $0x=0$, gives $\delta>0$ such that $|s|<\delta$ implies $sx\in U_0$. For every positive real $t>1/\delta$, $(1/t)x\in U$ and hence $x\in tU$. For $x=0$ every positive $t$ works. [step 1.1, F4]

3.1 Joint addition continuity at $(0,0)$ gives open zero-neighborhoods $U_1,U_2$ with $U_1+U_2\subseteq U_0$. Put $W=U_1\cap U_2\cap(-U_1)\cap(-U_2)$. This is open, contains zero, satisfies $-W=W$, and has $W+W\subseteq U_1+U_2\subseteq U$. [F1, step 2.1]

3.2 For $\varepsilon>0$ put $c=\varepsilon/(M+1)>0$. The set $cN$ is a zero-neighborhood by step 2.1, and $h=cn$ in it satisfies $|f(h)|=c|f(n)|\le cM<\varepsilon$. Thus $f$ is continuous at zero. At $x$, the neighborhood $x+cN$ maps into the $\varepsilon$-ball about $f(x)$ because $f(x+h)-f(x)=f(h)$. This includes $M=0$ and the zero functional. [step 2.1, F5, given]

4.1 For scalar addition at $(a,b)$, errors $|s-a|,|t-b|<\varepsilon/2$ give $|(s+t)-(a+b)|<\varepsilon$. For multiplication, if $|t-b|<1$ then $$|st-ab|\le |s-a||t|+|a||t-b|\le (|b|+1)|s-a|+|a||t-b|.$$ Taking both errors below $\min(1,\varepsilon/(2(|a|+|b|+1)))$ makes this less than $\varepsilon$. These are product-open neighborhoods, so they prove joint topological continuity, including $a=0$ or $b=0$. Together with the preceding steps this proves all assertions, without a choice principle or a separation axiom. [F5, step 2.1, step 2.2, step 3.1, step 3.2] ∎
