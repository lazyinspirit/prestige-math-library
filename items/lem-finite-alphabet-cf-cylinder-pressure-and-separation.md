---
dependency_level: 0
id: lem-finite-alphabet-cf-cylinder-pressure-and-separation
kind: lemma
title: "Finite-alphabet continued-fraction pressure and separation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-simple-continued-fraction-convergents-and-cylinders
  - thm-simple-continued-fractions-parametrise-the-irrationals
  - thm-hausdorff-dimension-critical-exponent
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Queffélec–Ramaré, Analyse de Fourier des fractions continues à quotients restreints"
      url: "https://ramare-olivier.github.io/Maths/kaufmanbis.pdf"
      locator: "§2, continuant identities and cylinder geometry; the pressure and separation arguments are supplied here"
---

## Statement

Assume Countable Choice. For a nonempty finite alphabet $A\subset\mathbb N_{\ge1}$ put $N=\max A$ and $F(A)=\{[0;a_1,a_2,\ldots]:a_i\in A\}$. For a finite word $w$ write $p(w)/q(w)=[0;w]$ and write $p'(w),q'(w)$ for its preceding convergent; for the empty word put $(p,q,p',q')=(0,1,1,0)$. Its prefix map is $T_w(t)=(p+tp')/(q+tq')$.

The set $F(A)$ is compact. For nonempty words, $q(v)q(w)\le q(vw)\le2q(v)q(w)$, reversal preserves $q$ and interchanges $p$ and $q'$, and $|T_w'(t)|=(q+tq')^{-2}$ for $0\le t\le1$. If two points of $F(A)$ have common prefix $w$ and different next digits, their distance is at least $c_N q(w)^{-2}$ for a fixed $c_N>0$. The unrestricted real continued-fraction interval of prefix $w$ has length $1/(q(q+q'))\le q^{-2}$.

For every $0<d<\dim_HF(A)$,
$$\sum_{w\in A^m}q(w)^{-2d}\longrightarrow\infty\quad(m\to\infty).$$
Moreover, for every $0<d<1$ and $S_0<\infty$, some finite alphabet $\{1,\ldots,N\}$ and word length $m$ satisfy $\sum_{w\in\{1,\ldots,N\}^m}q(w)^{-2d}>S_0$. The word length may be required to exceed any prescribed bound.

## Statement references

[Queffélec–Ramaré, §2](https://ramare-olivier.github.io/Maths/kaufmanbis.pdf) — elementary continued-fraction geometry; no dimension theorem of Good or Hensley is assumed here.

## Facts & Assumptions

**Given:** Countable Choice and the alphabet and convergent conventions in the Statement.

[F1] Convergents satisfy the integer recurrence, determinant identity $pq'-p'q=(-1)^{m-1}$ for length $m$, and the interval-length formula $1/(q(q+q'))$. [[lem-simple-continued-fraction-convergents-and-cylinders]]

[F2] Infinite simple continued fractions give a continuous bijective coding of the irrationals, and distinct codes first separate into prefix intervals with at most a rational endpoint in common. [[thm-simple-continued-fractions-parametrise-the-irrationals]]

[F3] If $d<\dim_HE$, then the $d$-dimensional Hausdorff measure of $E$ is infinite; its covering contents increase to that measure as the allowed covering diameter tends to zero. [[thm-hausdorff-dimension-critical-exponent]]

[A1] Countable Choice is assumed for the conditional Lie, integration, measure or dimension suppliers actually invoked below. No stronger Choice axiom is adopted. [[def-countable-choice]]

## Proof

**Proof technique:** integer matrix identities, explicit separation and covering contents.

1.1 Multiplying the symmetric matrices $M(a)=\begin{pmatrix}a&1\\1&0\end{pmatrix}$ gives $M(a_1)\cdots M(a_m)=\begin{pmatrix}q&q'\\p&p'\end{pmatrix}$ by the recurrence in F1. Transposition reverses the word, hence preserves $q$ and exchanges $p,q'$. The product formula gives $q(vw)=q(v)q(w)+q'(v)p(w)$, between $q(v)q(w)$ and $2q(v)q(w)$ because $0\le q'(v)\le q(v)$ and $0\le p(w)\le q(w)$. The determinant identity gives both the derivative formula and the exact difference identity $|T_w(t)-T_w(u)|=|t-u|/[(q+tq')(q+uq')]$. [F1, algebra]

1.2 The recurrence gives $q(w)\ge F_{m+1}$ for word length $m$, where $F_1=F_2=1$ and $F_{k+2}=F_{k+1}+F_k$. Hence all depth-$m$ cylinder diameters tend to zero uniformly. The finite-alphabet coding space is compact by a direct finite-branch argument: if an open cover had no finite subcover, at least one child of each cylinder with no finite subcover again has no finite subcover. Choose the least such child recursively. The resulting infinite code lies in one member of the cover, whose openness contains a sufficiently long prefix cylinder, contradicting its construction. The coding map is continuous by the uniform diameter bound, so its image $F(A)$ is compact. [F1, F2, construct]

2.1 Every infinite tail using digits at most $N$ lies in $[a,b]$, where $a=1/(N+1)$ and $b=1/(1+a)<1$: the crude tail bounds $0<t<1$ first give $t\ge a$, then $t\le b$. For two different next digits, the complete quotients have distance at least $g=1-(b-a)>0$; their reciprocals therefore differ by at least $g/(N+1)^2$. Applying the difference identity through the common prefix gives separation at least $c_Nq(w)^{-2}$ with $c_N=g/[4(N+1)^2]$, since both denominator factors are at most $2q(w)$. The same inequality is valid for the empty prefix under the stated convention. [F2, step 1.1, algebra]

2.2 The finitely many prefix sets $T_w(F(A))$, $w\in A^m$, cover $F(A)$ and have diameters at most $q(w)^{-2}\le F_{m+1}^{-2}$. Their sum of $d$-th diameter powers is bounded above by $\sum_{A^m}q(w)^{-2d}$. The Hausdorff covering content at diameter $F_{m+1}^{-2}$ is bounded above by this same sum. If $d<\dim_HF(A)$, F3 makes these contents tend to infinity. The displayed finite-word pressure sum therefore tends to infinity as asserted. [F3, step 1.2, algebra]

2.3 Now allow all positive integer digits. At each fixed depth $m$, the interiors of the unrestricted prefix intervals are disjoint by F2 and their union contains every irrational in $(0,1)$. Their omitted or repeated endpoints are rational and form a countable set, of Lebesgue measure zero. Thus their lengths $\ell_w$ sum to1. Each length is at most $h_m=F_{m+1}^{-2}$ by step 1.2. For $0<d<1$, $\sum_wq(w)^{-2d}\ge\sum_w\ell_w^d\ge h_m^{d-1}\sum_w\ell_w=F_{m+1}^{2(1-d)}$, which tends to infinity. Countable sums and the rational null set use the stated Countable Choice measure framework. [F1, F2, step 1.2, algebra, A1]

3.1 Choose $m$ beyond the requested lower bound so the last lower bound exceeds $S_0$. A positive countable sum exceeding $S_0$ has a finite partial sum exceeding $S_0$. The finitely many words in that partial sum use only finitely many digits, all at most some $N$. Their sum is bounded above by the sum over $\{1,\ldots,N\}^m$. This proves the near-one pressure assertion and completes every claim. [step 2.3, algebra] ∎

