---
id: def-nevanlinna-deficiency-and-ramification-index
kind: definition
title: "Nevanlinna deficiency and ramification index"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-nevanlinna-counting-proximity-and-characteristic
  - def-nevanlinna-truncated-and-ramification-counts
  - thm-nevanlinna-first-main-theorem
  - lem-nevanlinna-growth-dominates-logarithm
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §§1–2 and Ch. 4 §3, printed pp. 87–98 and 121–122: deficiencies, ramifications and defect relations"
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§§5–6.1, printed pp. 35–43: deficiency and ramification index conventions"
---

## Definition

Let $f$ be a nonconstant meromorphic function on $\mathbb C$. For a sphere
target $a\in\widehat{\mathbb C}$, the **deficiency** of $a$ is
$$\delta(a,f):=\liminf_{r\to\infty}\frac{m(r,a;f)}{T(r,f)} =1-\limsup_{r\to\infty}\frac{N(r,a;f)}{T(r,f)},$$
and the **ramification index** of $a$ is
$$ \varepsilon(a,f):=\liminf_{r\to\infty}\frac{N_1(r,a;f)}{T(r,f)}, $$
with $N_1(r,a;f)$ the integrated ramification count at target $a$,
weighting each $a$-point by its local degree minus one, as in
[[def-nevanlinna-truncated-and-ramification-counts]]. Both indices are
well-defined numbers in $[0,1]$ (proved below).

For a set $S\subseteq\widehat{\mathbb C}$ of targets, the **total deficiency
sum** is defined without choosing an enumeration by
$$\sum_{a\in S}\bigl(\delta(a,f)+\varepsilon(a,f)\bigr) :=\sup\Bigl\{\sum_{a\in A}\bigl(\delta(a,f)+\varepsilon(a,f)\bigr): A\subseteq S,\ A\ \text{finite}\Bigr\}.$$
For finite $S$ this is the ordinary finite sum. No countability of $S$ and no
enumeration of $S$ is assumed.

## Facts & Assumptions

**Given:** A nonconstant meromorphic $f$ on $\mathbb C$ and a sphere target $a$.

[F1] $m(r,a;f)$, $N(r,a;f)$ and $T(r,f)$ are finite for every $r>0$, $T$ is nondecreasing, and $T(r,f)>1$ for all sufficiently large $r$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] $m(r,a;f)+N(r,a;f)=T(r,f)+C(f,a)$ with a constant $C(f,a)$ independent of $r$; in particular $m\ge0$ and $N\le T+C(f,a)$ ([[thm-nevanlinna-first-main-theorem]]). Integrated counts are nonnegative for $r\ge1$; their centre term can be negative when $r<1$.

[F3] $N(r,a;f)=\bar N(r,a;f)+N_1(r,a;f)$, and $0\le N_1(r,a;f)\le N(r,a;f)$ for $r\ge1$, with $N_1(r,a;f)$ the integrated count of $a$-points weighted by local degree minus one ([[def-nevanlinna-truncated-and-ramification-counts]]).

[F4] If $f$ is transcendental then $T(r,f)/\log r\to\infty$, and if $f$ is rational of degree $d\ge1$ then $T(r,f)=d\log r+O(1)$; in both cases $T(r,f)\to\infty$ ([[lem-nevanlinna-growth-dominates-logarithm]]).

## Proof

**Proof technique:** divide the First Main Theorem by $T$ and use that $T\to\infty$, then bound nonnegative numerators by $T$.

1.1 $T(r,f)\to\infty$: this is [F4] in the transcendental case, and in the rational case of degree $d\ge1$ the formula $T(r,f)=d\log r+O(1)$ diverges. [F4]

2.1 Since $C(f,a)$ is a constant and $T(r,f)\to\infty$, [F2] gives $\frac{m}{T}=1+\frac{C(f,a)}{T}-\frac NT=1-\frac NT+o(1)$, hence $\liminf_r\frac mT=\liminf_r\bigl(1-\frac NT\bigr)=1-\limsup_r\frac NT$; the two expressions for $\delta(a,f)$ agree. [F2, step 1.1, algebra]

2.2 $\delta(a,f)\in[0,1]$: from [F2], $0\le m\le T+C(f,a)$ and $0\le N\le T+C(f,a)$ for $r\ge1$; with $T(r,f)>0$ for all large $r$ by [F1], dividing by $T$ and taking limits gives $0\le\liminf\frac mT$ and $\limsup\frac NT\le1$. [F1, F2, step 1.1, algebra]

3.1 $\varepsilon(a,f)\in[0,1]$: for $r\ge1$, [F3] gives $0\le N_1(r,a;f)\le N(r,a;f)\le T(r,f)+C(f,a)$; dividing by $T$ and taking the lower limit gives $0\le\varepsilon(a,f)\le\limsup\frac NT\le1$. [F3, step 2.2, algebra]

3.2 If $f$ omits $a$, then $n(t,a;f)=0$ for every $t$, so $N(r,a;f)\equiv0$ and $\delta(a,f)=1-\limsup 0=1$; also $m(r,a;f)=T(r,f)+C(f,a)$ by [F2]. [F2, step 2.1, algebra]

4.1 The sum convention is well posed as an extended nonnegative supremum: the collection is nonempty because it contains the empty subsum $0$, and if $S$ is finite the supremum is attained at $A=S$. No enumeration or selection is used. [given] ∎
