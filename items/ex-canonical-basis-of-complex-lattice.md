---
id: ex-canonical-basis-of-complex-lattice
kind: example
title: "A canonical reduced basis for a complex lattice"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-lattice-and-complex-torus
  - lem-complex-conjugation-and-modulus-laws
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-integer-part
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'The fundamental domain': the reduction of a basis of a lattice, printed pp. 41-43."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, reduced bases and the modular fundamental domain, printed pp. 80-82."
    - title: "NIST Digital Library of Mathematical Functions, §23.2, equations 23.2.1-23.2.17"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(i): lattice bases and the modular ratio tau."
verification:
  precheck: pass
---

## Example

Call a ratio $\tau$ **reduced** when

$$\operatorname{Im}\tau>0,\qquad -\tfrac12<\operatorname{Re}\tau\le\tfrac12,\qquad |\tau|\ge1,\qquad\text{and}\qquad \operatorname{Re}\tau\ge0\ \text{whenever}\ |\tau|=1,$$

and let $\mathcal R$ be the set of reduced ratios. Every full complex lattice
$\Lambda$ admits an oriented basis $(\omega_1,\omega_2)$ with
$\tau=\omega_2/\omega_1\in\mathcal R$, this reduced ratio is uniquely determined
by $\Lambda$, and the number of oriented bases of $\Lambda$ realizing it is two
in general, four when $\tau=i$, and six when $\tau=e^{i\pi/3}=\tfrac12+\tfrac{\sqrt3}2i$.
The lattices $\mathbb Z+i\mathbb Z$ and $\mathbb Z+\mathbb Ze^{i\pi/3}$ realize
the exceptional ratios $i$ and $e^{i\pi/3}$.

## Facts & Assumptions

**Given:** A full complex lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with $\omega_1,\omega_2$ real-linearly independent, and $\tau:=\omega_2/\omega_1$.

[F1] $\omega_1,\omega_2$ are real-linearly independent, the pair $(\omega_1,\omega_2)$ is an **oriented** basis when $\operatorname{Im}(\omega_2/\omega_1)>0$, two oriented bases of one lattice differ by a matrix in $\mathrm{SL}_2(\mathbb Z)$, and all lattice-theoretic structure depends on the set $\Lambda$ alone ([[def-complex-lattice-and-complex-torus]]).

[F2] Every $z\in\mathbb C$ has unique real coordinates $z=a+bi$; $\operatorname{Re}z=a$, $\operatorname{Im}z=b$, $\overline z=a-bi$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] For all $z,w\in\mathbb C$: $z\overline z=|z|^2$, $|z|\ge0$, $|z|=0$ exactly when $z=0$, $|zw|=|z|\,|w|$ and $|z+w|\le|z|+|w|$; conjugation is an involutive real-field automorphism ([[lem-complex-conjugation-and-modulus-laws]]).

[F4] For every real $x$ there is exactly one integer $m=\lfloor x\rfloor$ with $m\le x<m+1$, hence an integer $m$ with $|x-m|\le\tfrac12$, namely $m=\lfloor x+\tfrac12\rfloor$ ([[lem-integer-part]]).

## Verification

**Proof technique:** direct.

1.1 Real-linear independence of $\omega_1,\omega_2$ gives $\tau\notin\mathbb R$, so after exchanging the two vectors if necessary one has $\operatorname{Im}\tau>0$ and $(\omega_1,\omega_2)$ is an oriented basis of $\Lambda$; every oriented basis of $\Lambda$ is $(a\omega_1+b\omega_2,\;c\omega_1+d\omega_2)$ with integers $a,b,c,d$ satisfying $ad-bc=1$, and conversely every such tuple yields an oriented basis, the coefficients being unique because $\omega_1,\omega_2$ are real-linearly independent. [F1, algebra]

1.2 Writing $\tau=x+iy$ with $x,y\in\mathbb R$ and $y>0$, the form $q(a,b):=|a+b\tau|^2=a^2+2abx+b^2(x^2+y^2)$ equals $(a+xb)^2+y^2b^2$ and also $x^2+y^2$ times a square plus $y^2a^2/(x^2+y^2)$, so $q(a,b)\ge y^2b^2$ and $q(a,b)\ge y^2a^2/(x^2+y^2)$; hence $q(a,b)\ge\varepsilon^2\max(a^2,b^2)$ with $\varepsilon^2:=y^2/\max(1,x^2+y^2)>0$ for all real $a,b$. [F2, F3, algebra]

1.3 A matrix $A\in\mathrm{SL}_2(\mathbb Z)$ fixes $\tau_0$ exactly when $b\tau_0^2+(a-d)\tau_0-c=0$; if $b=0$ this equation and $ad=1$ give $a=d=\pm1$, $c=0$, so $A=\pm I$. If $b\ne0$, the discriminant $(a-d)^2+4bc=(a+d)^2-4$ is negative, so the trace $t=a+d$ lies in $\{-1,0,1\}$; writing $\tau_0=u+iv$ with $v>0$, the fixed point equation reads $b(u^2-v^2)+(a-d)u-c+(2bu+a-d)v\,i=0$, so $u=(d-a)/(2b)$ and $v^2=-((a-d)^2+4bc)/(4b^2)=(4-t^2)/(4b^2)$. [F2, F3, algebra]

2.1 For the basis of step 1.1 the ratio is $\tau_A=(c+d\tau)/(a+b\tau)$ with $A=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)\in\mathrm{SL}_2(\mathbb Z)$, and $\operatorname{Im}\tau_A=\operatorname{Im}\tau/|a+b\tau|^2$. [F2, F3, step 1.1, algebra]

2.2 For trace $t=0$, $d=-a$, so step 1.3 gives $u=-a/b$ and $v^2=1/b^2$. At a reduced fixed point, $|u|\le\tfrac12$ and $|\tau_0|\ge1$, whence $4a^2\le b^2\le a^2+1$. Thus $3a^2\le1$, forcing the integer $a=0$, then $|b|=1$ and $\tau_0=i$. Now $d=0$ and $-bc=1$, giving precisely $A=\pm\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)=\mp S$, where $S=\left(\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\right)$; both fix $i$ directly. [step 1.3, F2, F3, algebra]

2.3 For trace $t=\pm1$: replacing $A$ by $-A$ changes the sign of $t$ and leaves the fixed points unchanged, so take $t=1$; then $d=1-a$ and $v^2=3/(4b^2)$, so with $B=|b|\ge1$ and $\sigma=b/B\in\{-1,1\}$ one has $\tau_0=\sigma(1-2a)/(2B)+\tfrac{\sqrt3}{2B}i$, and the constraints $|\operatorname{Re}\tau_0|\le\tfrac12$ and $|\tau_0|\ge1$ give $|1-2a|\le B$ and $B^2\le a^2-a+1$, hence $3a^2-3a\le0$ and $a\in\{0,1\}$. For $a=0$ the determinant condition gives $c=-\sigma$ and $\tau_0=\sigma/2+\tfrac{\sqrt3}2i$, which lies in $\mathcal R$ only for $\sigma=1$, giving $\tau_0=e^{i\pi/3}$ and $A=\left(\begin{smallmatrix}0&1\\-1&1\end{smallmatrix}\right)$; for $a=1$ it gives $c=-\sigma$, $\tau_0=-\sigma/2+\tfrac{\sqrt3}2i$, which lies in $\mathcal R$ only for $\sigma=-1$, giving again $\tau_0=e^{i\pi/3}$ and $A=\left(\begin{smallmatrix}1&-1\\1&0\end{smallmatrix}\right)$. Together with their negatives and $\pm I$ these six matrices form the stabiliser of $e^{i\pi/3}$, and both displayed matrices are checked directly to fix $e^{i\pi/3}$. [step 1.3, F3, algebra]

3.1 Only finitely many values $\operatorname{Im}\tau_A$ satisfy $\operatorname{Im}\tau_A\ge\tfrac12\operatorname{Im}\tau$: by steps 2.1 and 1.2 that condition implies $|a+b\tau|^2\le2$, hence $a^2+b^2\le4/\varepsilon^2$, which has only finitely many integer solutions $(a,b)$. The value $\operatorname{Im}\tau_A=\operatorname{Im}\tau/|a+b\tau|^2$ depends only on $(a,b)$; the determinant equation may have infinitely many solutions $(c,d)$. [step 2.1, step 1.2, algebra]

3.2 For uniqueness let $\tau,\tau'\in\mathcal R$ and suppose $\tau'=(c+d\tau)/(a+b\tau)$ with $A=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)\in\mathrm{SL}_2(\mathbb Z)$; replacing $A$ by $A^{-1}=\left(\begin{smallmatrix}d&-b\\-c&a\end{smallmatrix}\right)$, which also lies in $\mathrm{SL}_2(\mathbb Z)$ and expresses $\tau$ through $\tau'$ in the same form, we may assume $\operatorname{Im}\tau'\ge\operatorname{Im}\tau$, and then step 2.1 gives $|a+b\tau|\le1$; moreover $\operatorname{Im}\tau\ge\sqrt3/2$, because $\operatorname{Im}^2\tau=|\tau|^2-\operatorname{Re}^2\tau\ge1-\tfrac14$. [step 2.1, F2, F3, algebra]

3.3 Fix an oriented basis $(\omega_1,\omega_2)$ of $\Lambda$ with reduced ratio $\tau_0\in\mathcal R$. By step 1.1 the oriented bases of $\Lambda$ are exactly the $(a\omega_1+b\omega_2,c\omega_1+d\omega_2)$ with $A\in\mathrm{SL}_2(\mathbb Z)$, and by step 2.1 such a basis again has ratio $\tau_0$ exactly when $A$ lies in the stabiliser $\operatorname{Stab}(\tau_0)=\{A\in\mathrm{SL}_2(\mathbb Z):(c+d\tau_0)/(a+b\tau_0)=\tau_0\}$; the assignment $A\mapsto(a\omega_1+b\omega_2,c\omega_1+d\omega_2)$ is injective, so the oriented bases of $\Lambda$ with reduced ratio $\tau_0$ are in bijection with $\operatorname{Stab}(\tau_0)$. [step 1.1, step 2.1, algebra]

4.1 Some oriented basis of $\Lambda$ has maximal imaginary part of its ratio: the set of values $\operatorname{Im}\tau_A$ over $A\in\mathrm{SL}_2(\mathbb Z)$ contains $\operatorname{Im}\tau$ (take $A=I$), so it meets $[\tfrac12\operatorname{Im}\tau,\infty)$, and by step 3.1 the values in that interval form a nonempty finite set; its maximum is attained at some matrix $A_0$ and dominates every value, because a value outside the interval is $<\tfrac12\operatorname{Im}\tau\le\operatorname{Im}\tau$. [step 2.1, step 3.1, algebra]

4.2 If $b=0$, then $ad=1$ forces $a=d=\pm1$ and $\tau'=(c+a\tau)/a=\tau+c/a$; both $\operatorname{Re}\tau$ and $\operatorname{Re}\tau'$ lie in $(-\tfrac12,\tfrac12]$, so $c/a=0$, hence $\tau'=\tau$. [step 3.2, algebra]

4.3 If $b\ne0$, then replacing $A$ by $-A$ leaves $\tau'$ unchanged, so we may assume $b\ge1$; by step 3.2, $b\operatorname{Im}\tau\le|a+b\tau|\le1$, so $b\le1/\operatorname{Im}\tau\le2/\sqrt3<2$ and therefore $b=1$. [step 3.2, algebra]

5.1 Let $(\omega_1^\ast,\omega_2^\ast)$ realize the maximum of step 4.1, with ratio $\tau^\ast$. Replacing $\omega_2^\ast$ by $k\omega_1^\ast+\omega_2^\ast$ changes the ratio to $\tau^\ast+k$ without changing its imaginary part or orientation. Choose $k=-\lfloor\operatorname{Re}\tau^\ast+\tfrac12\rfloor$; if the resulting real part is $-\tfrac12$, add one more copy of $\omega_1^\ast$. Thus we may suppose $-\tfrac12<\operatorname{Re}\tau^\ast\le\tfrac12$, still with maximal imaginary part. [F4, step 1.1, step 4.1, algebra]

5.2 With $b=1$ the bound $|a+\tau|\le1$ of step 3.2 reads $a^2+2a\operatorname{Re}\tau+|\tau|^2\le1$, hence $a(a+2\operatorname{Re}\tau)\le1-|\tau|^2\le0$, and we distinguish three cases. If $a\ge1$, then $a+2\operatorname{Re}\tau\le0$ gives $\operatorname{Re}\tau\le-\tfrac12$, contradicting $\tau\in\mathcal R$. If $a=0$, then $|\tau|=1$; the determinant condition $ad-bc=1$ gives $c=-1$ and $\tau'=(c+d\tau)/\tau=d-\overline{\tau}$, and $\tau'\in\mathcal R$ forces $d=0$, $\tau=i$ or $d=1$, $\tau=e^{i\pi/3}$, in both cases $\tau'=\tau$. If $a\le-1$, then $a+2\operatorname{Re}\tau\ge0$ gives $\operatorname{Re}\tau\ge-\tfrac a2\ge\tfrac12$, so $\operatorname{Re}\tau=\tfrac12$; then $a^2+a+|\tau|^2\le1$ and $|\tau|\ge1$ give $a\in\{-1,0\}$ and $|\tau|=1$, so $a=-1$, $\tau=e^{i\pi/3}$, and with $d=-c-1$ one computes $\tau'=-c+e^{2\pi i/3}\in\mathcal R$, which forces $c=-1$ and $\tau'=\tau\in\mathcal R$. Hence $\tau'=\tau$ in every case of $b\ne0$. [step 4.2, step 4.3, F2, F3, algebra]

6.1 If $|\tau^\ast|<1$, then $(-\omega_2^\ast,\omega_1^\ast)$ is an oriented basis of $\Lambda$ whose ratio $-1/\tau^\ast$ has $\operatorname{Im}(-1/\tau^\ast)=\operatorname{Im}\tau^\ast/|\tau^\ast|^2>\operatorname{Im}\tau^\ast$, contradicting maximality; hence $|\tau^\ast|\ge1$. [step 5.1, F3, algebra]

7.1 The ratio now has positive imaginary part, $-\tfrac12<\operatorname{Re}\tau^\ast\le\tfrac12$ and $|\tau^\ast|\ge1$. It is reduced unless $|\tau^\ast|=1$ and $\operatorname{Re}\tau^\ast<0$. In that case the oriented basis $(-\omega_2^\ast,\omega_1^\ast)$ has ratio $-1/\tau^\ast=-\overline{\tau^\ast}$, with real part in $(0,\tfrac12)$, modulus $1$ and the same positive imaginary part, hence lies in $\mathcal R$. [step 5.1, step 6.1, F3, algebra]

8.1 Steps 4.2 and 5.2 prove that two reduced ratios related by a basis change are equal; with step 7.1 this gives existence and uniqueness of the reduced ratio of $\Lambda$, and shows it is realized by at least one oriented basis. [step 7.1, step 4.2, step 5.2]

9.1 By steps 1.3, 2.2 and 2.3 the stabiliser of $\tau_0\in\mathcal R$ is $\{\pm I,\pm S\}$, of order four, when $\tau_0=i$, the six-element set $\{\pm I,\pm\left(\begin{smallmatrix}0&1\\-1&1\end{smallmatrix}\right),\pm\left(\begin{smallmatrix}1&-1\\1&0\end{smallmatrix}\right)\}$ when $\tau_0=e^{i\pi/3}$, and $\{\pm I\}$, of order two, for every other reduced $\tau_0$; by step 3.3 these are exactly the numbers of oriented bases of $\Lambda$ with reduced ratio $\tau_0$. Finally $\mathbb Z+i\mathbb Z$ has the reduced oriented basis $(1,i)$ with ratio $i$, and $\mathbb Z+\mathbb Ze^{i\pi/3}$ has the reduced oriented basis $(1,e^{i\pi/3})$ with ratio $e^{i\pi/3}$, so the exceptional cases occur. [step 3.3, step 2.2, step 2.3, algebra] ∎

The reduction uses the basis changes $\tau\mapsto\tau+k$ and $\tau\mapsto-1/\tau$. Positive definiteness of $|a+b\tau|^2$ makes the relevant denominator pairs finite; step 5.2 handles the boundary of the modular fundamental domain.
