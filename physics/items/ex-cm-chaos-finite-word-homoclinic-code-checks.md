---
id: ex-cm-chaos-finite-word-homoclinic-code-checks
kind: example
title: "The single-flip code at $a=100$: a nonperiodic coded orbit converging to the fixed point at both ends"
status: published
origin: pipeline
domain: mathematics
dependency_level: 8
deps: [thm-henon-coded-invariant-set-is-conjugate-to-shift, lem-finite-word-deviations-give-homoclinic-orbits, lem-symbol-locality-gives-coding-continuity, lem-coded-quadratic-recurrence-is-a-contraction, def-bilateral-symbol-and-bounded-sequence-space, def-cm-topologically-mixing-dense-periodic-and-sensitive-maps, thm-of-square-roots, def-abs-value]
dependency_roles:
  thm-henon-coded-invariant-set-is-conjugate-to-shift: mathematical-premise
  lem-finite-word-deviations-give-homoclinic-orbits: mathematical-premise
  lem-symbol-locality-gives-coding-continuity: mathematical-premise
  lem-coded-quadratic-recurrence-is-a-contraction: mathematical-premise
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-abs-value: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Section 13.2, homoclinic orbits and their codes"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, coding of invariant orbits by bi-infinite sequences"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
verification:
  precheck: pass
---

## Example

Take $a=100$ and let $s\in X_\pm$ be the code with

$$s_0=-1,\qquad s_n=+1\ (n\ne0),$$

the single-flip code. Then $s$ is constant outside a finite set (indeed outside $\{0\}$), is not the constant code $\bar{+1}$, and is not periodic: $S_\pm^m s\ne s$ for every $m\ge1$, because the unique coordinate at which $S_\pm^ms$ equals $-1$ is $-m\ne0$ whereas $s$ equals $-1$ only at $0$. Consequently the coded point $z:=h(s)$ satisfies $z\ne(r_+,r_+)$ and $F^m(z)\ne z$ for every $m\ge1$, while

$$F^n(z)\longrightarrow(r_+,r_+)\quad(n\to+\infty\ \text{and}\ n\to-\infty).$$

## Facts & Assumptions

**Given:** The parameter $a=100$, the single-flip code $s$, the coding map $h$ and the phase map $F$ of [[thm-henon-coded-invariant-set-is-conjugate-to-shift]], and the fixed point $(r_+,r_+)$, $r_+=1+\sqrt{101}$, of [[lem-finite-word-deviations-give-homoclinic-orbits]].

[L1] Finite-word data ([[lem-finite-word-deviations-give-homoclinic-orbits]]): a code that equals the constant code $\bar u$ outside a finite set has coded orbit converging to $(r_u,r_u)$ at both ends, and $h(s)\ne(r_u,r_u)$ for $s\ne\bar u$; distinct codes give distinct points.

[L2] Conjugacy and injectivity ([[thm-henon-coded-invariant-set-is-conjugate-to-shift]], [[lem-symbol-locality-gives-coding-continuity]]): $F^n(h(t))=h(S_\pm^nt)$ for all $t$ and $n$, and $h$ is injective; hence $F^m(h(s))=h(s)$ would force $S_\pm^ms=s$, and $h(s)=h(\bar{+1})$ would force $s=\bar{+1}$.

[L3] The constant code ([[lem-finite-word-deviations-give-homoclinic-orbits]], clause 1): $h(\bar{+1})=(r_+,r_+)$ with $r_+=1+\sqrt{101}$.

[L4] Signs ([[lem-coded-quadratic-recurrence-is-a-contraction]], clause 4, [[thm-of-square-roots]], [[def-abs-value]]): $\operatorname{sign}x_n(t)=t_n$ for every code $t$ and every $n$; in particular $x_0(s)<0<r_+$ because $s_0=-1$ and $r_+>1>0$.



## Verification

**Proof technique:** direct; combine the finite-word convergence with the injectivity of the coding to exclude periodicity.

1.1 Nonperiodicity of the code: for $m\ge1$, the coordinate $0$ of $S_\pm^ms$ equals $s_m=+1$, while $s_0=-1$; hence $S_\pm^ms\ne s$. Also $s\ne\bar{+1}$ because $s_0=-1$. [given, algebra]

2.1 The point differs from the fixed point: by [L4], $x_0(s)<0<r_+$, so $h(s)\ne(r_+,r_+)$ directly; alternatively this follows from the injectivity and $s\ne\bar{+1}$ in [L1], [L2]. [given, step 1.1, L2, L4]

2.2 No return to the initial point: if $F^m(h(s))=h(s)$ for some $m\ge1$, then $h(S_\pm^ms)=h(s)$ by [L2], so $S_\pm^ms=s$ by injectivity, contradicting step 1.1. [step 1.1, L2]

3.1 Two-sided convergence: the code $s$ equals $\bar{+1}$ outside $\{0\}$, so [L1] applies with $u=+1$ and gives $F^n(h(s))\to(r_+,r_+)$ as $n\to\pm\infty$. Together with steps 2.1 and 2.2 this exhibits $h(s)$ as a nonperiodic homoclinic point of the fixed point $(r_+,r_+)$. [step 2.1, step 2.2, L1, L3] ∎


## Remarks

- The verification uses only the coding dictionary and the finite-word convergence; it does not compute the coordinates of $h(s)$, which have no closed form.

- The same argument applies to every nonconstant code that is constant outside a finite set: none of these coded orbits is periodic, and each converges to the corresponding fixed point in both time directions.
