---
id: thm-primitive-recursive-numeralwise-representability
kind: theorem
title: "Primitive-recursive functions are representable in Q"
status: published
verification:
  audited: 2026-09-10
origin: pipeline
deps: [def-effective-theory-and-certified-godel-numbering, lem-q-numeral-calculation-and-bounded-cases, lem-godel-beta-coding-and-q-remainder, def-numeralwise-representability-and-arithmetic-sigma-one]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — Lemmas 4B.3–4B.4, 4B.11–4B.12 and Theorem 4B.13, pp146–148; Proposition 4C.12 p155"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Statement

Every primitive-recursive function has a numeralwise unique-value representing formula in Q, and every primitive-recursive relation has positive and negative numeral proofs. The representations can simultaneously be chosen PA-provably total and single-valued, with PA-provably equivalent syntactic $\Sigma_1$ graphs. No Q equivalence to those syntactic forms is asserted.

## Facts & Assumptions

[F1] [[lem-q-numeral-calculation-and-bounded-cases]]: Q decides every closed arithmetic atomic formula and every closed bounded formula. For every external $n$, it proves $x\le\bar n\to\bigvee_{i=0}^n x=\bar i$ and $x\le\bar n\lor\overline{n+1}\le x$. These are metatheoretic schemes; induction on $n$ here is not an induction axiom in Q.

[F2] [[lem-godel-beta-coding-and-q-remainder]]: Put $\beta(b,c,i)=\operatorname{rem}(b,1+(i+1)c)$. Every finite sequence of naturals has a beta code. Remainder (default zero at divisor zero) and beta have numeralwise unique-value representations in Q. PA proves beta-history existence and extension: for any $b,c,n,a$ it can find $b',c'$ whose first $n$ beta values agree with those of $b,c$ and whose value at $n$ is $a$.

## Proof

**Given:** A fixed finite primitive-recursive construction, the representability convention, and the Q/PA bases.

1.1 Induct externally on the finite primitive-recursive construction. Zero, successor and projections have the graphs $y=0$, $y=Sx$, $y=x_i$. Their unique-value proofs are equality calculations. For composition use $\exists u_1\cdots u_k(\bigwedge_i G_i(\bar x,u_i)\land H(\bar u,y))$. At numeral inputs the G graphs force numeral intermediate values, and H then forces the correct output; conversely those values witness existence. The same argument with variables proves totality and uniqueness in PA when the component graphs have them. [given, algebra]

2.1 Before using a graph A as a history component replace it by $A^*(\bar x,y):=A(\bar x,y)\land\forall z<y\,\neg A(\bar x,z)$. At numeral inputs with output r, uniqueness for A gives the positive instance of this strengthening and the same unique output. More strongly, for each external r, Q proves, uniformly in the other inputs, that $A^*(\bar x,\bar r)\land A^*(\bar x,y)\to y=\bar r$. Indeed F1 splits y into the numerals at most r or the case $\overline{r+1}\le y$. Below r the least-output clause at r refutes A at y; above r the least-output clause at y refutes A at r, since the numeral order calculation gives $\bar r<y$. The remaining case is equality. This does not require functionality at arbitrary nonnumeral inputs. [F1, step 1.1]

3.1 For $f(0,\bar x)=g(\bar x)$ and $f(t+1,\bar x)=h(t,f(t,\bar x),\bar x)$, let G,H and B be the strengthened graphs for g,h and beta from F2. Define the raw recursion graph by $\exists b,c[\exists u(G(\bar x,u)\land B(b,c,0,u))\land\forall i<t\,\exists u,v(B(b,c,i,u)\land B(b,c,Si,v)\land H(i,u,\bar x,v))\land B(b,c,t,y)]$. All free variables here have the indicated roles, and auxiliary variables are fresh. For numeral t and inputs, F2 codes the actual finite sequence $f(0,\bar n),\ldots,f(t,\bar n)$. Positive numeral instances of G,H,B and the finite case scheme F1 verify every clause, giving existence. [F1, F2, step 2.1]

4.1 For uniqueness, take any b,c satisfying the raw graph at those numeral inputs. G forces the initial witness to the numeral $f(0,\bar n)$, so B at coordinate zero holds with that numeral. Instantiate the successor clause at external i=0. Its occurrence of coordinate zero equals that numeral by the uniform property of strengthened B in step 2.1, even though b,c are arbitrary. H now forces v to the next computed numeral; consequently B at coordinate one holds with it. Repeat this finite argument for i=1,...,t-1. The terminal B occurrence then forces y to the computed numeral f(t,n), again by step 2.1. For t=0 the initial and terminal B occurrences alone suffice. This proves numeralwise uniqueness without assuming arbitrary Q history codes are functional. [step 2.1, step 3.1]

5.1 In PA the beta graph is total and unique by F2. Induction on t proves existence of the raw history: start with the g value and a one-entry beta code; extend its code by the uniquely determined h value using F2. A second induction shows any two histories have the same value at each coordinate, first at zero by G and then at the successor by H. Thus PA proves the raw graph total and unique. It follows in PA that A and its strengthening A* are equivalent whenever A is any constructed graph: uniqueness excludes all smaller competing outputs. Also $\neg A(\bar x,y)\leftrightarrow\exists z(A(\bar x,z)\land z\ne y)$, by totality and uniqueness. [F2, step 3.1, step 4.1]

6.1 We prove the complexity claim simultaneously with construction. The beta and initial graphs are bounded. At later stages replace earlier graphs by their PA-equivalent existential bounded forms, and replace negative occurrences by the distinct-output existential formula of step 5.1. Positive Boolean combinations and existential prefixes combine by fresh-variable prenexing. For bounded universal closure PA proves $\forall i<t\exists w\,\delta(i,w)\leftrightarrow\exists B\,\forall i<t\exists w\le B\,\delta(i,w)$: induction on t starts with B=0, and adjoining the next witness replaces B by its maximum with that witness. Repeating this for a fixed finite witness tuple supplies a common bound. The remaining matrix is bounded. Therefore every constructed graph is PA-equivalent to a syntactic Sigma1 graph, while its original strengthened form retains the Q assertion. [step 1.1, step 2.1, step 3.1, step 5.1]

7.1 For a primitive-recursive relation use the representing graph of its 0–1 characteristic function at output 1. The numeralwise unique-value theorem proves the instance when the value is 1, and proves its negation when the value is 0 since Q proves $0\ne1$ by F1. This completes the function and relation assertions. [F1, step 4.1, step 6.1] ∎
