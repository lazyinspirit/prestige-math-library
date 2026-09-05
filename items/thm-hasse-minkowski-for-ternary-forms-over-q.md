---
id: thm-hasse-minkowski-for-ternary-forms-over-q
kind: theorem
title: "Hasse-Minkowski for ternary forms over Q"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-ternary-isotropy-via-hilbert-symbol, lem-equivalent-definitions-of-the-hilbert-symbol, def-field-norm-and-trace, thm-chinese-remainder-theorem, cor-quadratic-forms-diagonalize-in-characteristic-not-two]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 11, Theorem 11.12"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, sections 4.6-4.7"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: pass
---

## Statement

A nondegenerate ternary quadratic form over $\mathbb Q$ is isotropic over
$\mathbb Q$ if and only if it is isotropic over $\mathbb R$ and over
$\mathbb Q_p$ for every prime $p$.

## Facts & Assumptions

**Given:** A nondegenerate ternary quadratic form $q$ over $\mathbb Q$ that is isotropic over every completion of $\mathbb Q$.

[L1] Over characteristic not $2$, quadratic forms diagonalize ([[cor-quadratic-forms-diagonalize-in-characteristic-not-two]]).

[L2] The ternary diagonal form $Z^2-aX^2-bY^2$ is isotropic over $Q_v$ exactly when $(a,b)_v=1$ ([[cor-ternary-isotropy-via-hilbert-symbol]]).

[L3] The condition $(a,b)_v=1$ is equivalent to $b$ being a norm from $Q_v(\sqrt a)$ ([[lem-equivalent-definitions-of-the-hilbert-symbol]]).

[L4] In a quadratic extension, the norm of $u+v\sqrt a$ is $u^2-av^2$ ([[def-field-norm-and-trace]]).

[L5] Simultaneous congruences modulo pairwise coprime integers have a solution ([[thm-chinese-remainder-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], diagonalize $q$ and multiply the whole form by a nonzero rational scalar so that one coefficient is $1$. Multiplying a form by a nonzero scalar does not change its isotropic vectors. Every nonzero rational square class has a squarefree integer representative, so independent nonzero rational rescalings of the other two coordinates, followed by a permutation of them, put the form in the shape $$ q(X,Y,Z)=Z^2-aX^2-bY^2 $$ with nonzero squarefree integers $a,b$ and $|a|\le |b|$. The local isotropy hypothesis and [L2] then say that $$ (a,b)_v=1 $$ for every place $v$ of $\mathbb Q$. We prove rational isotropy by induction on $m:=|a|+|b|$. [L1, L2, given, induction]

2.1 If $m=2$, then $a,b\in\{\pm1\}$. The real isotropy hypothesis rules out the positive-definite form $Z^2+X^2+Y^2$, so at least one of $a,b$ is $1$. Then $q(1,0,1)=0$ or $q(0,1,1)=0$, giving a rational isotropic vector. [step 1.1, base, algebra]

2.2 Assume $m>2$ and that every smaller value of the squarefree-coefficient measure $|a|+|b|$ satisfies the theorem. If $a$ is a rational square, then squarefreeness gives $a=1$ and $q(1,0,1)=0$, so assume that $a$ is not a rational square. Let $p$ be a prime dividing $b$. Because $q$ is isotropic over $\mathbb Q_p$, after scaling a nontrivial local solution we obtain a primitive triple $(x_p,y_p,z_p)\in\mathbb Z_p^3$ with $$ z_p^2-ax_p^2-by_p^2=0. $$ If $p$ divided $x_p$, then the equation would also force $p\mid z_p$, and because $p\mid b$ is squarefree it would then force $p\mid y_p$, contradicting primitivity. Therefore $x_p$ is a unit and $$ a\equiv (z_p/x_p)^2 \pmod p. $$ So $a$ is a square modulo every prime dividing $b$. By [L5], choose an integer $t$ with $t^2\equiv a\pmod {|b|}$ and then take its least absolute residue, so $|t|\le |b|/2$. Define $$ b_0:=\frac{t^2-a}{b}\in\mathbb Z. $$ Then $$ |b_0|=\frac{|t^2-a|}{|b|}\le \frac{|b|}{4}+1<|b|, $$ because $m>2$ and $|a|\le |b|$. [L5, step 1.1, cases, algebra]

3.1 If $b_0=0$, then $a=t^2$ and $(1,0,t)$ is already a nontrivial rational zero of $q$, so the induction closes immediately. Assume henceforth that $b_0\ne0$, and write $$ b_0=d c^2 $$ with $d$ a nonzero squarefree integer and $c\in\mathbb Z_{>0}$. Then $|d|\le|b_0|<|b|$. Fix a place $v$ and work in the quadratic algebra $A_v:=Q_v[T]/(T^2-a)$ with norm $N(u+wT)=u^2-aw^2$. Step 1.1 and [L3] give an element $\beta_v\in A_v$ with $N(\beta_v)=b$. Since this norm is nonzero, $\beta_v$ is a unit, with inverse $\overline{\beta_v}/b$. Also $$ N(t+T)=t^2-a=bb_0=b d c^2. $$ The norm formula is multiplicative by direct expansion, so $$ \gamma_v:=\frac{t+T}{c\beta_v} $$ has norm $d$. By [L3], $(a,d)_v=1$, and [L2] says that the squarefree smaller form $$ q_1(X,Y,Z):=Z^2-aX^2-dY^2 $$ is isotropic over $Q_v$. This holds at every place. [L2, L3, step 2.2, cases, algebra]

4.1 Because $|a|+|d|<|a|+|b|=m$, the inductive hypothesis applies to $q_1$, so it has a nontrivial rational zero $(x,y,z)$. The assumption in step 2.2 that $a$ is not a rational square forces $y\ne0$: otherwise $z^2=ax^2$ with $(x,z)\ne(0,0)$. Thus $$ z^2-ax^2=dy^2. $$ Set $$ w:=\frac{z+x\sqrt a}{y}\in\mathbb Q(\sqrt a). $$ By [L4], $N(w)=d$ and $N(cw)=c^2d=b_0$, while $N(t+\sqrt a)=bb_0$. Therefore $$ \eta:=\frac{t+\sqrt a}{cw}\in\mathbb Q(\sqrt a) $$ has norm $b$. Writing $\eta=u+v\sqrt a$ gives $$ u^2-av^2=b, $$ so $(v,1,u)$ is a nontrivial rational zero of $Z^2-aX^2-bY^2=q$. This closes the induction. [L4, step 2.2, step 3.1, induction, discharge-induction]

5.1 The converse implication is immediate because a rational isotropic vector remains isotropic after embedding $\mathbb Q$ into any completion. [given, algebra] ∎
