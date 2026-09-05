---
id: thm-hasse-minkowski-over-the-rationals
kind: theorem
title: "Hasse-Minkowski theorem over Q"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-hasse-minkowski-for-ternary-forms-over-q, cor-ternary-hilbert-one-place-principle, cor-ternary-isotropy-via-hilbert-symbol, lem-global-square-class-approximation, thm-local-isotropy-at-almost-all-primes, thm-odd-p-hilbert-symbol-formula, thm-weak-approximation-for-rational-places, cor-quadratic-forms-diagonalize-in-characteristic-not-two]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 11, Theorem 11.12"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, sections 4.8-4.9"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: pass
---

## Statement

Let $q$ be a nondegenerate quadratic form over $\mathbb Q$. Then $q$ is
isotropic over $\mathbb Q$ if and only if it is isotropic over $\mathbb R$ and
over $\mathbb Q_p$ for every prime $p$.

## Facts & Assumptions

**Given:** A nondegenerate quadratic form $q$ over $\mathbb Q$ that is isotropic over every completion of $\mathbb Q$.

[L1] Over characteristic not $2$, quadratic forms diagonalize ([[cor-quadratic-forms-diagonalize-in-characteristic-not-two]]).

[L2] The local-global statement already holds in dimension $3$ ([[thm-hasse-minkowski-for-ternary-forms-over-q]]).

[L3] Finitely many local square classes can be patched by one global rational number ([[lem-global-square-class-approximation]]).

[L4] In dimension at least $3$, only finitely many finite places can fail local isotropy ([[thm-local-isotropy-at-almost-all-primes]]).

[L5] A ternary diagonal form is locally isotropic exactly when the associated Hilbert symbol is $1$ ([[cor-ternary-isotropy-via-hilbert-symbol]]).

[L6] Over an odd prime place, the Hilbert symbol of two units is $1$ ([[thm-odd-p-hilbert-symbol-formula]]).

[L7] Ternary isotropy at all but one place forces isotropy at the last place ([[cor-ternary-hilbert-one-place-principle]]).

[L8] Weak approximation lets one choose rational coordinates close to finitely many prescribed local ones ([[thm-weak-approximation-for-rational-places]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and clearing denominators, write $$q=a_1X_1^2+\cdots+a_nX_n^2$$ with every $a_i\in\mathbb Z^\times$. Dimension $1$ is vacuous. In dimension $2$, local isotropy says that $-a_1a_2$ has even valuation at every finite prime and is positive at the real place, hence it is a rational square and $q$ is rationally isotropic. Dimension $3$ is [L2]. We proceed by induction on $n\ge4$. [L1, L2, given, induction]

1.2 Suppose $n=4$. Write $q=\langle a_1,a_2\rangle\perp\langle a_3,a_4\rangle$ and let $S$ consist of $\infty$ and the primes dividing $2a_1a_2a_3a_4$. At every $v\in S$, local isotropy gives a common value $t_v$ represented by the first binary form whose negative is represented by the second. If that value is $0$, at least one of the two nondegenerate binary forms has a nontrivial zero and therefore represents every local element by the elementary parametrization used in [[cor-ternary-isotropy-via-hilbert-symbol]]; choose a nonzero value represented by the other binary form and use universality of the isotropic one to obtain a nonzero common value. Apply [L3] to obtain $t\in\mathbb Q^\times$ in the square class of $t_v$ at every $v\in S$, with even valuation outside $S$ except possibly at one extra odd prime $p_0$. If no exceptional prime occurs, choose any odd $p_0\notin S$ as a harmless placeholder. Only finitely many of those even valuations are nonzero. Multiplying $t$ by the global square $$\left(\prod_{p\notin S\cup\{p_0\}}p^{-v_p(t)/2}\right)^2$$ preserves every local square class and makes $v_p(t)=0$ for all $p\notin S\cup\{p_0\}$. [L3, construct, algebra]

2.1 Put $$f_1=\langle a_1,a_2,-t\rangle,\qquad f_2=\langle a_3,a_4,t\rangle.$$ Both forms are isotropic at every place of $S$ by the choice of the local square classes. If $p\notin S\cup\{p_0\}$, then $p$ is odd and all three coefficients of each form are units. Fact [L6], followed by [L5], makes both forms isotropic over $\mathbb Q_p$. Thus each is isotropic everywhere except possibly at $p_0$, and [L7] supplies isotropy there too. Applying the ternary theorem [L2] makes both forms rationally isotropic. An isotropic vector of $f_1$ with nonzero third coordinate scales to a representation of $t$ by $\langle a_1,a_2\rangle$; if that coordinate is zero, the binary form is itself isotropic and the same elementary parametrization represents $t$. Applying the identical argument to $f_2$ gives rational identities $$t=a_1x_1^2+a_2x_2^2,\qquad -t=a_3x_3^2+a_4x_4^2.$$ Their sum is a nontrivial rational zero of $q$. [L2, L5, L6, L7, step 1.2, algebra]

2.2 Now suppose $n\ge5$ and the result is known in smaller dimensions. Set $q'=\langle a_3,\ldots,a_n\rangle$. By [L4], the set $S$ of places where $q'$ is not isotropic is finite. If it is empty, induction applied to $q'$ already gives a rational zero of $q$. Otherwise, fix $v\in S$ and choose a local zero of $q$. If its value $t_v:=a_1x_v^2+a_2y_v^2$ is nonzero, retain it. If $t_v=0$, anisotropy of $q'$ forces all the $q'$-coordinates of this zero to vanish, so $(x_v,y_v)$ is a nontrivial zero of the first binary form. Both coordinates are nonzero; put $r:=x_v/y_v$, so $a_2=-a_1r^2$. For any $u\in Q_v$, the choices $$X:=\frac{u+a_1}{2a_1},\qquad Y:=\frac{u-a_1}{2a_1r}$$ satisfy $a_1X^2+a_2Y^2=u$, which is the elementary parametrization underlying [L5]. Choose any nonzero vector $z_v$ for $q'$; anisotropy gives $q'(z_v)\ne0$, and use the displayed formula with $u=-q'(z_v)$ to obtain new $x_v,y_v$. This gives a local zero of $q$ for which $$t_v=a_1x_v^2+a_2y_v^2\ne0,$$ and $q'$ represents $-t_v$. Make this choice at every $v\in S$. [L4, L5, step 1.1, induction, choose]

3.1 By [L8], choose rational $x,y$ close enough to every $(x_v,y_v)$ that $t:=a_1x^2+a_2y^2$ lies in $t_vQ_v^{\times2}$ for all $v\in S$. Then $\langle t\rangle\perp q'$ is isotropic at every place in $S$ because $q'$ represents $-t$ there, and it is isotropic outside $S$ because $q'$ already is. This form has dimension $n-1$, so induction gives a rational zero of it. Substituting $t=a_1x^2+a_2y^2$ turns that zero into a rational zero of $q$. [L8, step 2.2, induction, discharge-induction]

4.1 Conversely, a rational isotropic vector remains isotropic after embedding $\mathbb Q$ into any completion. [given, algebra] ∎
