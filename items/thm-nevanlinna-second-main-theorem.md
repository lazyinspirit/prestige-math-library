---
id: thm-nevanlinna-second-main-theorem
kind: theorem
title: "Nevanlinna Second Main Theorem with ramification and truncation"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-nevanlinna-counting-proximity-and-characteristic
  - def-nevanlinna-exceptional-radius-notation
  - def-nevanlinna-truncated-and-ramification-counts
  - lem-nevanlinna-logarithmic-derivative
  - lem-nevanlinna-ramification-counting-identity
  - thm-nevanlinna-first-main-theorem
  - thm-nevanlinna-characteristic-elementary-laws
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §2, Theorem 2.1 and its proof, printed pp. 96–98: the ramified and truncated second fundamental theorem"
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§6, printed pp. 12–13: derivation of the Second Main Theorem from the logarithmic-derivative lemma"
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§§5–6.1, printed pp. 35–43: logarithmic-derivative lemma and the truncated form of the Second Main Theorem"
---

## Statement

Assume Countable Choice. Let $f$ be a nonconstant meromorphic function on
$\mathbb C$ and let $a_1,\dots,a_q$ be distinct sphere values with $q\ge3$. Then,
outside a set of finite linear measure,
$$ \sum_{j=1}^q m(r,a_j;f)+N_1(r,f)\le 2T(r,f)+S(r,f), $$
equivalently
$$ (q-2)T(r,f)\le\sum_{j=1}^q N(r,a_j;f)-N_1(r,f)+S(r,f), $$
and consequently
$$ (q-2)T(r,f)\le\sum_{j=1}^q\bar N(r,a_j;f)+S(r,f). $$
If $f$ has finite order, the error terms are $O_f(\log r)$ for every
sufficiently large $r$ without exception; if $f$ is rational, they are
$O_f(1)$ for every sufficiently large $r$.

## Facts & Assumptions

**Given:** A nonconstant meromorphic $f$ on $\mathbb C$, distinct sphere values $a_1,\dots,a_q$ with $q\ge3$; Countable Choice is assumed.

[F1] The proximity $m(r,a;g)$ is the mean of $\log\frac1{\delta(g(re^{it}),a)}$, the standard proximity $\frac1{2\pi}\int_0^{2\pi}\log^+|g|dt$ differs from $m(r,\infty;g)$ by at most $\frac12\log2$, and $T=m(\cdot,\infty)+N(\cdot,\infty)$; $N$ is the centre-regularized count ([[def-nevanlinna-counting-proximity-and-characteristic]], [[def-nevanlinna-exceptional-radius-notation]]).

[F2] First Main Theorem: $m(r,a;g)+N(r,a;g)=T(r,g)+C(g,a)$ with a constant independent of $r$ ([[thm-nevanlinna-first-main-theorem]]).

[F3] Characteristic laws: $T(r,gh)\le T(r,g)+T(r,h)+O(1)$, $T(r,g+h)\le T(r,g)+T(r,h)+O(1)$, $T(r,1/h)=T(r,h)+O_h(1)$ as $r\to\infty$ ([[thm-nevanlinna-characteristic-elementary-laws]]).

[F4] Logarithmic-derivative lemma: $m_0(r,g'/g)=S(r,g)$ for nonconstant meromorphic $g$, with $O_g(\log r)$ at all large radii when $g$ has finite order and $O_g(1)$ at all large radii when $g$ is rational; the chordal proximity obeys the same bounds ([[lem-nevanlinna-logarithmic-derivative]]).

[F5] Ramification identity: $N_1(r,g)=N(r,0;g')+2N(r,\infty;g)-N(r,\infty;g')$ for every $r>0$, and for every finite set of distinct targets $A$, $\sum_{a\in A}N_1(r,a;g)\le N_1(r,g)$ when $r\ge1$ ([[lem-nevanlinna-ramification-counting-identity]]).

[F6] $N(r,a;g)=\bar N(r,a;g)+N_1(r,a;g)$, with $0\le N_1(r,a;g)\le N(r,a;g)$ for $r\ge1$ ([[def-nevanlinna-truncated-and-ramification-counts]]).

[F7] $S(r,g)$ denotes a term bounded off a set of finite linear measure by $C(\log^+T(r,g)+\log r)$, with $C$ and the threshold belonging to the occurrence; finitely many occurrences may share the union of their exceptional sets ([[def-nevanlinna-exceptional-radius-notation]]).

## Proof

**Proof technique:** separate the targets by a Möbius substitution, dominate the proximity sum by the proximity of $H=\sum_j1/(f-a_j)$, estimate $H$ through the logarithmic derivatives $f'/(f-a_j)$, and convert the derivative counts into $N_1$ by the ramification identity.

1.1 (Reduction to finite targets) Among the $q+1$ distinct sphere points $0,1,\dots,q$ at most $q$ belong to $\{a_1,\dots,a_q\}$; let $m$ be the least one that does not, so $m\ne\infty$, and put $g:=1/(f-m)$. Then $g$ is nonconstant meromorphic. For finite $a_j$ set $a_j':=1/(a_j-m)$, and for $a_j=\infty$ set $a_j':=0$; these are distinct finite values. [choose, algebra]

1.2 (Local computation for the substitution) The Möbius map $w\mapsto1/(w-m)$ has local degree one on the sphere, so composition preserves every local degree and ramification multiplicity of $f$. For each finite target $a_j$, the identity $g-a_j'=\frac{a_j-f}{(f-m)(a_j-m)}$ shows that a zero of $g-a_j'$ occurs exactly at $f=a_j$ with the same order. If $a_j=\infty$, then $a_j'=0$ and $g=1/(f-m)$ has a zero of order $t$ exactly where $f$ has a pole of order $t$. Thus the target counting functions agree, $N(r,a_j';g)=N(r,a_j;f)$ for every sphere target, and the preserved ramification multiplicities give $N_1(r,g)=N_1(r,f)$. [F1, F6, algebra]

1.3 (Finite-target setup) Henceforth $a_1,\dots,a_q$ are finite and distinct; put $\delta:=\min_{i<j}|a_i-a_j|>0$ and $H:=\sum_{j=1}^q1/(f-a_j)$. For each fixed finite $a$, the chordal proximity $m(r,a;f)$ differs from $m_0(r,1/(f-a))$ by at most a constant depending on $a$: writing $w=f-a$, the ratio $\sqrt{1+|w+a|^2}/\max(1,|w|)$ is bounded above and below by positive constants depending only on $a$. Thus the finite number of conversions below contributes only $O_{a_1,\dots,a_q}(1)$. [F1, construct, algebra]

1.4 (Target separation) At every point $z$ at most one index $j$ satisfies $|f(z)-a_j|<\delta/2$, since two such indices would give $|a_i-a_j|<\delta$; write $u_j:=1/(f(z)-a_j)$ and $M:=\max_j|u_j|=|u_{j_*}|$. If $M\le\max\{1,4(q-1)/\delta\}$, then $\sum_j\log^+|u_j|\le q\log^+\max\{1,4(q-1)/\delta\}\le\log^+|H(z)|+q\log^+\bigl(4(q-1)/\delta\bigr)$. If $M>\max\{1,4(q-1)/\delta\}$, then $|f(z)-a_{j_*}|<\delta/2$, so $|u_j|\le2/\delta<M/2$ for every $j\ne j_*$, whence $|H(z)|\ge M-\sum_{j\ne j_*}|u_j|>M/2$ and $\sum_j\log^+|u_j|\le\log M+(q-1)\log^+(2/\delta)\le\log^+|H(z)|+\log2+(q-1)\log^+(2/\delta)$. In both cases $\sum_{j=1}^q\log^+\bigl|\frac1{f(z)-a_j}\bigr|\le\log^+|H(z)|+C_{q,\delta}$ with $C_{q,\delta}:=\log2+\max\bigl\{q\log^+\bigl(4(q-1)/\delta\bigr),\,(q-1)\log^+(2/\delta)\bigr\}$. [choose, algebra]

1.5 (Reduction to logarithmic derivatives) Since $H=(f'H)\cdot(1/f')$ and $f'H=\sum_jf'/(f-a_j)$, the pointwise inequalities $\log^+|uv|\le\log^+|u|+\log^+|v|$ and $\log^+|\sum_{j=1}^qu_j|\le\sum_{j=1}^q\log^+|u_j|+\log q$ give $m(r,\infty;H)\le m(r,\infty;1/f')+\sum_{j=1}^qm(r,\infty;f'/(f-a_j))+\log q$ for every $r>0$. [algebra]

1.6 (The term $m(1/f')+N_1$) Since $f$ is nonconstant, $f'\not\equiv0$. If $f'$ is nonconstant, [F2] gives $m(r,0;f')=T(r,f')-N(r,0;f')+O_f(1)$; if $f'=c\ne0$ is constant, the same relation follows directly from the definitions, since $N(r,0;f')=0$ and $m(r,0;c)=T(r,c)-\log|c|$. In either case [F5] and $T(r,f')=m(r,\infty;f')+N(r,\infty;f')$ give $$m(r,0;f')+N_1(r,f)=m(r,\infty;f')+2N(r,\infty;f)+O_f(1),$$ using $N_1(r,f)=N(r,0;f')+2N(r,\infty;f)-N(r,\infty;f')$. [F1, F2, F5, algebra]

2.1 (Characteristic transfer) $T(r,g)=T(r,1/(f-m))=T(r,f-m)+O_f(1)=T(r,f)+O_f(1)$ by [F3]; consequently by [F2], $m(r,a_j';g)=T(r,g)-N(r,a_j';g)+C(g,a_j')=T(r,f)-N(r,a_j;f)+O_f(1)=m(r,a_j;f)+O_f(1)$, and the finite sum of $O_f(1)$ errors is absorbed into $S(r,f)$ for all large $r$; hence it suffices to prove the inequalities for finite distinct targets. [F2, F3, step 1.2, suffices]

2.2 (Means) Taking angular means of step 1.4 and using the integrability of the logarithmic singularities and the finite-target comparison of step 1.3 gives $\sum_{j=1}^qm(r,a_j;f)\le m(r,\infty;H)+C_{a_1,\dots,a_q}$ for every $r>0$. [F1, step 1.3, step 1.4, algebra]

3.1 (Logarithmic derivative of the shifted functions) For each $j$ the function $f-a_j$ is nonconstant meromorphic and $(f-a_j)'/(f-a_j)=f'/(f-a_j)$, so [F4] gives $m(r,\infty;f'/(f-a_j))=S(r,f-a_j)$; since $T(r,f-a_j)\le T(r,f)+O_f(1)$ by [F3], we have $S(r,f-a_j)\le S(r,f)+O_f(1)$, and likewise $m(r,f'/f)=S(r,f)$; taking the union of the exceptional sets of these $q+1$ occurrences gives a set $E$ of finite linear measure such that $\sum_{j=1}^qm(r,a_j;f)\le m(r,\infty;1/f')+q\,S(r,f)+O_f(1)$ for every $r\notin E$. [F4, F7, step 2.2, step 1.5, algebra]

4.1 (Bounding $m(f')$) The pointwise bound $\log^+|f'|\le\log^+|f|+\log^+|f'/f|$ gives $m(r,\infty;f')\le m(r,\infty;f)+m(r,f'/f)\le m(r,\infty;f)+S(r,f)$ for $r\notin E$. [F4, step 3.1, algebra]

5.1 (Conclusion of the finite-target case) Combining steps 3.1, 1.6 and 4.1 for $r\notin E$ gives $\sum_jm(r,a_j;f)+N_1(r,f)\le m(r,\infty;f)+2N(r,\infty;f)+qS(r,f)+O_f(1)=T(r,f)+N(r,\infty;f)+qS(r,f)+O_f(1)=2T(r,f)-m(r,\infty;f)+qS(r,f)+O_f(1)\le2T(r,f)+qS(r,f)+O_f(1)$, and the constant is absorbed into the error term, so $\sum_{j=1}^qm(r,a_j;f)+N_1(r,f)\le2T(r,f)+S(r,f)$ outside $E$. [step 3.1, step 1.6, step 4.1, algebra]

6.1 (Equivalent forms) By [F2], $\sum_{j=1}^qm(r,a_j;f)=qT(r,f)-\sum_{j=1}^qN(r,a_j;f)+O_f(1)$; substituting into step 5.1 and absorbing $O_f(1)$ yields $(q-2)T(r,f)\le\sum_{j=1}^qN(r,a_j;f)-N_1(r,f)+S(r,f)$ outside $E$. Conversely, rearranging this displayed bound using the same equality from [F2] recovers step 5.1 up to $O_f(1)$; [F7] absorbs that bounded term into an error of the same class, enlarging the finite-measure exceptional set if needed, so the first two displayed inequalities are equivalent. Moreover $N(r,a_j;f)=\bar N(r,a_j;f)+N_1(r,a_j;f)$ and $\sum_jN_1(r,a_j;f)\le N_1(r,f)$ by [F5] and [F6], so $\sum_jN(r,a_j;f)-N_1(r,f)\le\sum_j\bar N(r,a_j;f)$ and $(q-2)T(r,f)\le\sum_{j=1}^q\bar N(r,a_j;f)+S(r,f)$ outside $E$. [F2, F5, F6, F7, step 5.1, algebra]

7.1 (Refinements) If $f$ has finite order then $g=1/(f-m)$ and every $f-a_j$ have finite order with characteristics $T(r,f)+O_f(1)$, so the errors in step 3.1 are $O_f(\log r)$ at every large radius by [F4], and all other errors above are $O_f(1)$ by [F2] and [F3]; hence the inequalities hold with $O_f(\log r)$ at every sufficiently large $r$, with no exceptional set in this case. If $f$ is rational the same argument gives $O_f(1)$ at every sufficiently large $r$, again with no exceptional set. [F2, F3, F4, step 3.1, step 6.1]

8.1 (Unwinding) Applying the finite-target argument of steps 1.3–7.1 to the transform of step 1.1 and transferring back by steps 1.2 and 2.1 proves the three displayed inequalities for the original targets, including the case in which some $a_j$ equals $\infty$; the finite union $E$ of the exceptional sets of the finitely many logarithmic-derivative applications still has finite linear measure, and all conversion constants are absorbed into $S(r,f)$. [step 1.1, step 1.2, step 2.1, step 6.1, step 7.1] ∎
