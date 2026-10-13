---
id: lem-coded-quadratic-recurrence-is-a-contraction
kind: lemma
title: "The square-root recurrence $T_s(x)_n = s_n\\sqrt{a+x_{n-1}+x_{n+1}}$ is a contraction of $B_R$ with a unique coded solution"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-bilateral-symbol-and-bounded-sequence-space, lem-bounded-bilateral-sequence-ball-is-complete, thm-banach-fixed-point, def-lipschitz-holder-contraction, thm-of-square-roots, lem-of-abs-value, def-abs-value, def-interval, def-complete-ordered-field, def-metric-space, def-metric-convergence]
dependency_roles:
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  lem-bounded-bilateral-sequence-ball-is-complete: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  def-lipschitz-holder-contraction: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-abs-value: mathematical-premise
  def-interval: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-convergence: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Section 13.1, contraction and invariant-coding constructions for quadratic horseshoe maps"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, nested-disk coding by a contraction on a compact set"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
verification:
  precheck: pass
---

## Statement

Fix $a\ge100$ and put

$$R:=\sqrt a+3,\qquad L:=\sqrt{\,a-2R\,}.$$

Let $X_{\pm}$ and $B_R$ be the two-sign shift space and the closed ball of bounded bilateral sequences of [[def-bilateral-symbol-and-bounded-sequence-space]], and for $s\in X_{\pm}$ define

$$T_s:B_R\longrightarrow \mathbb R^{\mathbb Z},\qquad (T_sx)_n:=s_n\sqrt{\,a+x_{n-1}+x_{n+1}\,}\qquad(n\in\mathbb Z).$$

For a nonzero real $r$, define $\operatorname{sign}r:=+1$ when $r>0$ and
$\operatorname{sign}r:=-1$ when $r<0$. Once clause 2 establishes
$T_s(B_R)\subseteq B_R$, its iterates are defined by
$T_s^0:=\operatorname{id}_{B_R}$ and $T_s^{m+1}:=T_s\circ T_s^m$ for
$m\in\mathbb N$.

Then:

1. $a-2R=(\sqrt a-1)^2-7\ge74$, so $L\ge\sqrt{74}>1$; moreover $a+2R<R^2$, hence $\sqrt{a+2R}<R$;
2. for every $s\in X_{\pm}$ and $x\in B_R$ the radicands $a+x_{n-1}+x_{n+1}$ lie in $[a-2R,a+2R]\subseteq(0,\infty)$, so $T_sx$ is a well-defined bounded sequence with $\|T_sx\|_\infty\le\sqrt{a+2R}<R$; in particular $T_s(B_R)\subseteq B_R$;
3. for all $x,y\in B_R$ and every $s\in X_{\pm}$,

$$\|T_sx-T_sy\|_\infty\le\frac1L\,\|x-y\|_\infty,\qquad \frac1L<1 ;$$

4. hence $T_s$ has, for each $s\in X_{\pm}$, exactly one fixed point $x(s)\in B_R$, and for every $n\in\mathbb Z$

$$\operatorname{sign}x_n(s)=s_n,\qquad |x_n(s)|\ge L,\qquad x_{n+1}(s)+x_{n-1}(s)=x_n(s)^2-a .$$

## Facts & Assumptions

**Given:** The real number $a\ge100$, the constants $R=\sqrt a+3$ and $L=\sqrt{a-2R}$, the shift space $X_\pm$ and the complete ball $B_R$ of [[def-bilateral-symbol-and-bounded-sequence-space]] and [[lem-bounded-bilateral-sequence-ball-is-complete]], and the operators $T_s$.

[F1] Square roots ([[thm-of-square-roots]], [[def-complete-ordered-field]]): every $u\ge0$ has a unique $u^{1/2}:=\sqrt u\ge0$ with $(\sqrt u)^2=u$; if $0\le u\le v$ then $\sqrt u\le\sqrt v$, since $\sqrt u,\sqrt v\ge0$ and $(\sqrt u)^2=u\le v=(\sqrt v)^2$; in particular $\sqrt{u^2}=u$ for $u\ge0$ and $\sqrt{x}>0$ for $x>0$. Also $\sqrt a\ge10$ because $a\ge100=10^2$ and $t\mapsto t^2$ is increasing on $[0,\infty)$.

[F2] The ball $B_R$ is nonempty and, with the supremum distance $\|x-y\|_\infty$, a complete metric space ([[lem-bounded-bilateral-sequence-ball-is-complete]], clauses 1, 2 and 4; [[def-metric-space]]); the value $\|x\|_\infty$ satisfies $\|x\|_\infty\le R$ exactly when $|x_n|\le R$ for all $n$ ([[def-bilateral-symbol-and-bounded-sequence-space]], [[def-abs-value]]).

[F3] Banach's fixed point theorem ([[thm-banach-fixed-point]], [[def-lipschitz-holder-contraction]]): a contraction of a nonempty complete metric space into itself, with constant $q<1$, has exactly one fixed point.

[F4] Absolute value and order: $|u|\le M$ exactly when $-M\le u\le M$ for $M\ge0$; $|uv|=|u||v|$; and $s_n\in\{-1,+1\}$ for every $n$ ([[lem-of-abs-value]], [[def-abs-value]], [[def-bilateral-symbol-and-bounded-sequence-space]]).

[F5] Order arithmetic on intervals ([[def-interval]], [[def-complete-ordered-field]]): if $|x_j|\le R$ for $j\in\mathbb Z$ then $a-R-R\le a+x_{n-1}+x_{n+1}\le a+R+R$; and for reals $u\ge v>0$ one has $\sqrt{u}\ge\sqrt v>0$ by [F1].



## Proof

**Proof technique:** direct; bound the radicands on the ball, estimate the square-root Lipschitz constant from below by $2L$, and apply Banach's fixed point theorem.

1.1 Constants: by [F1], $\sqrt a\ge10$, so $R=\sqrt a+3\ge13$ and $a-2R=a-2\sqrt a-6=(\sqrt a-1)^2-7\ge81-7=74$; hence $L=\sqrt{a-2R}\ge\sqrt{74}>1$ by [F1]. Further $R^2=a+6\sqrt a+9$ and $R^2-(a+2R)=a+6\sqrt a+9-a-2\sqrt a-6=4\sqrt a+3>0$, so $a+2R<R^2$ and [F1] gives $\sqrt{a+2R}<R$. [given, F1, algebra]

2.1 Well-definedness and self-mapping: let $s\in X_\pm$, $x\in B_R$ and $n\in\mathbb Z$. Since $|x_{n\pm1}|\le R$ by [F2], [F5] gives $a-2R\le a+x_{n-1}+x_{n+1}\le a+2R$; by step 1.1 this is a positive interval, so [F1] makes $\sqrt{a+x_{n-1}+x_{n+1}}$ a well-defined positive real, and $T_sx$ is a function $\mathbb Z\to\mathbb R$. Moreover $|(T_sx)_n|=|s_n|\sqrt{a+x_{n-1}+x_{n+1}}=\sqrt{a+x_{n-1}+x_{n+1}}\le\sqrt{a+2R}<R$ by [F4], [F1] and step 1.1. Taking the supremum over $n$ gives $\|T_sx\|_\infty\le\sqrt{a+2R}<R$, so $T_s(B_R)\subseteq B_R$. [given, step 1.1, F1, F2, F4, F5]

2.2 Contraction: let $x,y\in B_R$ and $n\in\mathbb Z$, and put $u:=a+x_{n-1}+x_{n+1}$, $v:=a+y_{n-1}+y_{n+1}$; by step 1.1 both lie in $[a-2R,a+2R]\subseteq[L^2,\infty)$, so $\sqrt u,\sqrt v\ge L>0$ by [F1]. Then $$|\sqrt u-\sqrt v|=\frac{|u-v|}{\sqrt u+\sqrt v}\le\frac{|u-v|}{2L}\le\frac{|x_{n-1}-y_{n-1}|+|x_{n+1}-y_{n+1}|}{2L}\le\frac{\|x-y\|_\infty}{L},$$ where the first identity is the algebraic identity $u-v=(\sqrt u-\sqrt v)(\sqrt u+\sqrt v)$ ([F1], [F4]), the second inequality uses [F4] and [F5], and the last uses [F2]. Since $|(T_sx)_n-(T_sy)_n|=|\sqrt u-\sqrt v|$ by [F4], taking the supremum over $n$ gives $\|T_sx-T_sy\|_\infty\le\|x-y\|_\infty/L$, and $1/L<1$ by step 1.1. [given, step 1.1, F1, F2, F4, F5, algebra]

3.1 Fixed point: $B_R$ is nonempty ($0\in B_R$) and complete in the sup distance by [F2]; $T_s$ maps $B_R$ into itself by step 2.1 and is a contraction with constant $1/L<1$ by step 2.2; [F3] therefore gives exactly one $x(s)\in B_R$ with $T_sx(s)=x(s)$. [step 2.1, step 2.2, F2, F3]

4.1 Properties of the fixed point: fix $n$ and write $r:=\sqrt{a+x_{n-1}(s)+x_{n+1}(s)}>0$, so that $x_n(s)=s_nr$ by the fixed point equation. If $s_n=+1$ then $x_n(s)=r>0$, and if $s_n=-1$ then $x_n(s)=-r<0$; hence in both cases $\operatorname{sign}x_n(s)=s_n$ and $|x_n(s)|=r$. Squaring the fixed point equation gives $x_n(s)^2=r^2=a+x_{n-1}(s)+x_{n+1}(s)$, which is the recurrence, and $|x_n(s)|=r\ge L$ by step 1.1, [F1] and [F5]. [step 3.1, step 1.1, F1, F4, F5] ∎


## Remarks

- The choice $a\ge100$ is a convenient explicit margin: it gives $\sqrt a\ge10$, hence $L^2\ge74$ and the self-mapping inequality $\sqrt{a+2R}<R$ with room to spare. The argument works for every $a$ with $a-2R>1$ and $a+2R<R^2$.

- No choice principle is used: the contraction and the completeness of $B_R$ are choice-free, and the fixed point is unique.
