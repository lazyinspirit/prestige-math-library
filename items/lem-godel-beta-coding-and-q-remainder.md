---
id: lem-godel-beta-coding-and-q-remainder
kind: lemma
title: "Beta coding and arithmetic sequence witnesses"
status: draft
origin: pipeline
deps: [def-robinson-q-and-peano-arithmetic, lem-q-numeral-calculation-and-bounded-cases]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — 1E.4–1E.6 pp19–20; 4B.8 p147; local PA extension argument"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
    - title: "Avigad, Computability and Incompleteness (2007) — §4.3 Lemmas 4.3.4 and Theorem 4.3.7, pp93–96; Moschovakis Lemma 4B.8 p147"
      url: "https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf"
---


## Statement

Put $\beta(b,c,i)=\operatorname{rem}(b,1+(i+1)c)$. Every finite sequence of naturals has a beta code. Remainder (default zero at divisor zero) and beta have numeralwise unique-value representations in Q. PA proves beta-history existence and extension: for any $b,c,n,a$ it can find $b',c'$ whose first $n$ beta values agree with those of $b,c$ and whose value at $n$ is $a$.

## Facts & Assumptions

[F1] [[def-robinson-q-and-peano-arithmetic]]: Use the arithmetic signature $0,S,+,\cdot,=$. Robinson arithmetic $Q$ consists of the universal closures of these seven formulas:

$$Sx\ne0;\quad Sx=Sy\to x=y;\quad x\ne0\to\exists y\,x=Sy;$$ $$x+0=x;\quad x+Sy=S(x+y);\quad x\cdot0=0;\quad x\cdot Sy=x\cdot y+x.$$

PA adds, for every formula $\phi(x,\bar z)$, the universal closure of $[\phi(0,\bar z)\land\forall x(\phi(x,\bar z)\to\phi(Sx,\bar z))]\to\forall x\phi(x,\bar z)$. Parameters $\bar z$ are allowed. No induction schema is included in $Q$.

For an external natural number $n$, its numeral is the term $\bar n=S^n0$. Define $x\le y$ by $\exists z(z+x=y)$ and $x<y$ by $x\le y\land x\ne y$, with $z$ fresh. The left-addend witness is intentional: commutativity is not an axiom of Q.

Use def-set-coded-formal-derivation for the six logical schemes and three rules. Negation, conjunction and existential quantification are primitive: $A\to B$ expands to $\neg(A\land\neg B)$, $A\lor B$ to $\neg(\neg A\land\neg B)$, and $\forall x A$ to $\neg\exists x\neg A$. Inequality means negated equality. Substitute capture-free, always taking the least available fresh variable index and universally closing the remaining parameters in increasing index order. Thus each displayed axiom and each induction instance is a definite finite sentence.

[F2] [[lem-q-numeral-calculation-and-bounded-cases]]: Q decides every closed arithmetic atomic formula and every closed bounded formula. For every external $n$, it proves $x\le\bar n\to\bigvee_{i=0}^n x=\bar i$ and $x\le\bar n\lor\overline{n+1}\le x$. These are metatheoretic schemes; induction on $n$ here is not an induction axiom in Q.

## Proof

**Given:** Natural inputs and the beta convention; the coding theorem is external ZF, while the last assertion is proved in PA.

1.1 For $d>0$, induction on $b$ gives unique division $b=qd+r$, $r<d$: at zero use $(0,0)$; from $(q,r)$ use $(q,r+1)$ if $r+1<d$, and $(q+1,0)$ if $r+1=d$. If two such expressions had $q<q\prime$, then $qd+r<(q+1)d\le q\prime d\le q\prime d+r\prime$, impossible; interchange them for the other inequality. Thus quotient and remainder are unique. These arguments use natural-number induction and elementary distributivity/order, each derivable in PA by induction from F1. [F1, given]

2.1 To derive the required congruence theorem, repeatedly replace $(u,v)$ with $(v,\operatorname{rem}(u,v))$ while $v>0$. The positive second coordinate strictly decreases, so strong induction on the second coordinate $v$ gives termination, uniformly in $u$ (also when $u<v$). Common divisors are unchanged because $u=qv+r$ iff $r=u-qv$. Maintaining integer linear combinations of the original pair (integers represented as differences of naturals) shows that the final positive divisor $g$ is $su+tv$. It divides both original numbers, and every common divisor divides it. Thus coprime $u,v$ have $su+tv=1$. For residues $A,B$ the integer $Avt+Bus$ is congruent to A modulo u and B modulo v. Taking its nonnegative residue modulo uv gives a simultaneous solution. Uniqueness modulo uv follows since a number divisible by u and v is divisible by uv: multiply $su+tv=1$ by the quotient after division by u. Iterating combines any finite pairwise coprime list. [step 1.1]

2.2 Use the Q remainder graph $R(b,d,r):=(d=0\land r=0)\lor[d\ne0\land r\le b\land r<d\land\exists q\le b\,(b=q\cdot d+r)]$. At numeral b,d, F2 restricts r and q to finite lists of numerals. Step 1.1 identifies the one correct remainder; every other pair is refuted by closed calculations, and the correct pair supplies existence. If d=0 the first clause forces r=0. Substituting the term $1+(i+1)c$ into the divisor place gives the beta graph. At numeral inputs the divisor is a numeral by F2, so the same unique-value conclusion follows. [F2, step 1.1]

3.1 For $a_0,\ldots,a_n$, choose $j>\max(n+1,a_0,\ldots,a_n)$ and $c=j!$. Let $d_i=1+(i+1)c$. If a prime p divided both $d_i,d_k$ with $i\ne k$, it would divide $(i-k)c$. It cannot divide c, since it divides $1+(i+1)c$, so it divides $|i-k|\le n<j$, and then divides j!, a contradiction. Here every integer greater than one has a prime divisor by taking its least divisor greater than one; that divisor is prime by minimality. The prime-divides-product assertion follows from the Bezout identity when it does not divide one factor. Thus the moduli are pairwise coprime, and step 2.1 gives b with remainder $a_i<d_i$ at each modulus. The empty list requires no congruences. [step 2.1]

4.1 For the PA assertion, division and the Euclidean argument above are inductions on naturals, with integer coefficients stored as pairs of naturals. For every j and bound B, PA proves there is C>B divisible by every positive t<=j: the induction starts with C=B+1 for j=0; from a witness C at j take C(j+1) at j+1. This uses a single existential induction invariant and does not presuppose sequence coding or a factorial function. PA bounds the old beta values by $1+nc$ for $i<n$. Choose $j>n+1,a,1+nc$ and such a C>j divisible by 1,...,j, and use new moduli $1+(i+1)C$. The coprimality argument of step 3.1 uses precisely this divisibility property. Induction on $k\le n+1$ combines the first k congruences as in step 2.1, keeping the running product of their moduli and the current residue as existential witnesses; the induction hypothesis is a formula asserting those witnesses exist. The first n residues are $\beta(b,c,i)$, whose existence and uniqueness follow from division, and the last is a. Thus the formal PA induction produces the new code and proves every specified coordinate equation. Repeating extension supplies any internally given finite history; for a fixed external list step 3.1 already supplies its code. [step 1.1, step 2.1, step 3.1, step 2.2] ∎
