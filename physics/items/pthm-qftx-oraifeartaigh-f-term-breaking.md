---
id: pthm-qftx-oraifeartaigh-f-term-breaking
kind: physics-theorem
title: Exact tree-level minimum in the three-field O’Raifeartaigh model
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-breaking-and-phenomenology
axiom_base: "ZF; no choice principle is added by the finite-dimensional minimization argument"
deps:
  - post-qftx-n1-wess-zumino-model
  - pthm-qftx-n1-f-term-potential
  - thm-complex-numbers-form-a-field
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - thm-every-complex-number-has-a-square-root
  - lem-qftx-real-part-modulus-bound-equality
  - thm-reals-ordered-field
dependency_roles:
  post-qftx-n1-wess-zumino-model: physical-assumption
  pthm-qftx-n1-f-term-potential: physical-result
  thm-complex-numbers-form-a-field: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  thm-every-complex-number-has-a-square-root: mathematical-premise
  lem-qftx-real-part-modulus-bound-equality: mathematical-premise
  thm-reals-ordered-field: mathematical-premise
proof_strategy: direct
physical_scope: "Exact minimization of the classical canonical F-term scalar potential over pointwise field values for the specified rigid N=1 three-chiral-field Wess–Zumino model. It proves nonzero auxiliary F terms at the pointwise minima but, because the adopted model restricts spacetime fields to compact support, does not identify nonzero constant field values as allowed vacuum configurations. It makes no quantum, radiative-stability, or continuum-QFT claim."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§7.3, printed pp. 75–76, equations (7.3.1)–(7.3.3): the same cubic superpotential and its canonical tree-level potential; the source assumes positive real parameters and the regime m²>yk."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§6.3.1, printed pp. 38–39: the general O’Raifeartaigh mechanism from incompatible F-term equations."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

In the classical rigid $N=1$ Wess–Zumino model with three chiral scalar coordinates $(\phi_1,\phi_2,\phi_3)\in\mathbb C^3$, canonical Kähler metric, no gauge D-term, and natural units $\hbar=c=1$, adopt the holomorphic superpotential

$$W(\Phi_1,\Phi_2,\Phi_3)=-k\Phi_1+m\Phi_2\Phi_3+\frac y2\Phi_1\Phi_3^2,$$

where $k,m\in\mathbb C\setminus\{0\}$, $y\in\mathbb C$ is arbitrary, and $[\phi_i]=[m]=M$, $[k]=M^2$, and $[y]=1$. The classical zero-derivative F-term potential on pointwise field values is

$$V(\phi_1,\phi_2,\phi_3)=\left|-k+\frac y2\phi_3^2\right|^2+|m\phi_3|^2+|m\phi_2+y\phi_1\phi_3|^2.$$

In the adopted natural-unit convention, $V:\mathbb C^3\to\mathbb R$ is the classical F-term potential-energy density, with $[V]=M^4$, $[W]=M^3$, and $[F^i]=M^2$.

These pointwise field values and eliminated auxiliary values belong to the ordinary complex bosonic sector of the model postulate, obtained by setting fermions and all positive coefficient-algebra degrees to zero; no order on nilpotent formal coefficients is used. Here “tree-level” means this classical potential before quantum-loop corrections. At a field value, F-term supersymmetry is unbroken exactly when all eliminated auxiliary fields $F^i=-\overline{\partial_iW}$ vanish; otherwise it is F-term broken.

Put $a=|k|>0$, $b=|m|^2>0$, and $c=|y|$. If $b\ge ac$, including $y=0$, the global minimum is $V_{\min}=a^2=|k|^2$, and all minimizing field values are $\phi_3=\phi_2=0$ with arbitrary $\phi_1\in\mathbb C$. If $0<b<ac$, then $c>0$ and

$$V_{\min}=a^2-\frac{(ac-b)^2}{c^2}=\frac bc\left(2a-\frac bc\right)>0,$$

with all minimizing field values given by arbitrary $\phi_1\in\mathbb C$, one of the two distinct square roots $\phi_3$ of

$$\phi_3^2=\frac{2k}{y}\left(1-\frac{b}{ac}\right),$$

and $\phi_2=-y\phi_1\phi_3/m$. In both regimes every minimizing field value has at least one nonzero auxiliary F term, so the pointwise classical minimum breaks F-term supersymmetry. Thus the stronger bound $V\ge |k|^2$ holds for all field values exactly when $|m|^2\ge |k||y|$; in the other regime the exact minimum is smaller but remains positive. The set of minima has a flat complex $\phi_1$ direction and is not an isolated point. The adopted field-model postulate restricts spacetime fields to compact support, so this pointwise minimization alone does not establish that nonzero constant minimizing values are allowed homogeneous vacuum configurations. No quantum vacuum, stability against radiative corrections, goldstino conclusion, or continuum-QFT existence is asserted.

## Statement references

[Stephen P. Martin, *A Supersymmetry Primer*, §7.3, equations (7.3.1)–(7.3.3)](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §6.3.1](https://arxiv.org/pdf/hep-th/0101055).

Adopted rigid $N=1$ Wess–Zumino sigma-model action and field-domain convention: [[post-qftx-n1-wess-zumino-model]].

Canonical F-term potential and auxiliary-field equation: [[pthm-qftx-n1-f-term-potential]].

Complex arithmetic prerequisite: [[thm-complex-numbers-form-a-field]].

Complex conjugate and modulus definition: [[def-complex-conjugate-real-imaginary-part-and-modulus]].

Complex conjugation and modulus laws: [[lem-complex-conjugation-and-modulus-laws]].

Existence of the square roots used to describe the minimizing configurations: [[thm-every-complex-number-has-a-square-root]].

The real-part bound and exact phase-alignment equality condition: [[lem-qftx-real-part-modulus-bound-equality]].

The ordered-real-field fact $2>0$ used to distinguish the two square roots: [[thm-reals-ordered-field]].

## Facts & Assumptions

**Given:** The canonical three-field model and its classical pointwise zero-derivative potential in the Statement; all field values range over $\mathbb C^3$, and $k,m\ne0$.

[A1] [[post-qftx-n1-wess-zumino-model]]: the adopted rigid $N=1$ model has a holomorphic superpotential, a canonical Kähler special case, engineering dimensions $[\phi_i]=M$, $[W]=M^3$, smooth compactly supported spacetime component fields, and the displayed algebraic auxiliary Lagrangian. Its explicit component conversion gives the complex bosonic auxiliary Lagrangian with $F_{\mathrm{raw}}=2F$, physical D bracket $-I_D/4$, and physical F bracket $I_F/2$. Its full formal even auxiliary coefficient is unrestricted before taking this ordinary complex sector. This proof uses the resulting complex scalar potential, without ordering nilpotent coefficients or inferring a quantum measure.

[F1] [[pthm-qftx-n1-f-term-potential]]: for the canonical Kähler metric, $V_F=\sum_i|W_i|^2$, and the algebraic auxiliary fields satisfy $F^i=-\overline{W_i}$.

[F2] [[thm-complex-numbers-form-a-field]]: $\mathbb C$ is a field and every element has unique coordinates $a+bi$; in particular it has no zero divisors and every nonzero element is invertible.

[F3] [[def-complex-conjugate-real-imaginary-part-and-modulus]] and [[lem-complex-conjugation-and-modulus-laws]]: $|z|^2=z\bar z$, $|z|\ge0$, $|z|=0$ exactly when $z=0$, and $|zw|=|z||w|$.

[F4] [[thm-every-complex-number-has-a-square-root]]: every complex number has a square root.

[F5] [[lem-qftx-real-part-modulus-bound-equality]]: if $x,u,r\in\mathbb R$, $r\ge0$, and $r^2=x^2+u^2$, then $x\le r$, with equality exactly when $u=0$ and $x\ge0$.

[F6] [[thm-reals-ordered-field]]: $2=1+1>0$ in $\mathbb R$, so $2\ne0$ in $\mathbb C$ under its real-coordinate embedding.

## Proof

**Given:** [A1], [F1]–[F6], and the parameter hypotheses in the Statement.

1.1 Differentiate the stated polynomial with respect to its three chiral coordinates: $W_1=-k+(y/2)\phi_3^2$, $W_2=m\phi_3$, and $W_3=m\phi_2+y\phi_1\phi_3$. Substituting these derivatives into [F1] gives exactly the displayed potential. [F1, algebra]

2.1 Set $a=|k|$, $b=|m|^2$, $c=|y|$, and $t=|\phi_3|^2\ge0$. Write $\bar k y\phi_3^2=x+iu$, where $x,u\in\mathbb R$, and put $r=|\bar k y\phi_3^2|$. By [F2] and [F3], $r\ge0$, $r^2=x^2+u^2$, and modulus multiplicativity gives $r=act$. Applying [F5] gives $x\le act$, with equality exactly when $u=0$ and $x\ge0$. Expanding the first square gives $\left|k-\frac y2\phi_3^2\right|^2=a^2+\frac{c^2t^2}{4}-x\ge a^2+\frac{c^2t^2}{4}-act$. Adding the second term $bt$ and the nonnegative third square yields $V\ge q(t):=a^2+(b-ac)t+\frac{c^2t^2}{4}$. Equality in this lower bound requires the third square to vanish and, when $ct>0$, requires $\operatorname{Im}(\bar k y\phi_3^2)=0$ and $\operatorname{Re}(\bar k y\phi_3^2)\ge0$, equivalently that $\bar k y\phi_3^2$ is nonnegative real. [F2, F3, F5, step 1.1, algebra]

3.1 Suppose $b\ge ac$. If $c>0$, then $(b-ac)t\ge0$ and $c^2t^2/4\ge0$, with their sum zero only at $t=0$. If $c=0$, then $q(t)=a^2+bt$ and $b>0$, so again its unique minimum occurs at $t=0$. Thus $V\ge a^2$. At $\phi_3=\phi_2=0$, every term except $|k|^2$ vanishes, so the lower bound is attained for every $\phi_1$. Conversely, any minimizing value must have $t=0$; then the third square is $|m\phi_2|^2$, which vanishes only for $\phi_2=0$ since $m\ne0$. These are exactly all the minimizers in this regime. [F2, F3, step 2.1, algebra]

3.2 Suppose $0<b<ac$, so $a,c>0$. Completing the square gives $q(t)=a^2-\frac{(ac-b)^2}{c^2}+\frac{c^2}{4}\left(t-\frac{2(ac-b)}{c^2}\right)^2$. The unique minimizing value of $t\ge0$ is therefore $t_*=2(ac-b)/c^2>0$, and the lower bound is $q(t_*)=a^2-(ac-b)^2/c^2=(b/c)(2a-b/c)$. Since $0<b/c<a$, we have $(b/c)(2a-b/c)>0$, while $a^2-q(t_*)=(a-b/c)^2>0$. Thus this lower bound is positive and strictly below $a^2$. [F2, F3, step 2.1, algebra]

4.1 At each minimizer in step 3.1, $W_1=-k\ne0$. The auxiliary equation in [F1] gives $F^1=-\bar W_1\ne0$; hence the classical F-term order parameter is nonzero at every such pointwise minimum. [F1, step 3.1, algebra]

4.2 Put $\rho=(2k/y)(1-b/(ac))$. It is nonzero because $k,y\ne0$ and $0<b<ac$. By [F4] at least one square root exists; let $\phi_3$ be any root, so $\phi_3^2=\rho$. Since $c=|y|>0$, [F3] and $|yy^{-1}|=|1|=1$ give $|1/y|=1/c$. The real factor $1-b/(ac)=(ac-b)/(ac)>0$ has modulus equal to itself, and $|2|=2$, so $|\rho|=\frac{2a}{c}\frac{ac-b}{ac}=\frac{2(ac-b)}{c^2}=t_*$. Multiplicativity in [F3] now gives $|\phi_3|^2=|\phi_3^2|=|\rho|=t_*$. Also $\bar k y\phi_3^2=\bar k y\rho=\frac{2|k|^2(ac-b)}{ac}=\frac{2a(ac-b)}c=ac t_*>0$. For arbitrary $\phi_1$, set $\phi_2=-y\phi_1\phi_3/m$, which is defined because $m\ne0$. The third square vanishes, and the first-square bound is an equality by [F5], so every such field value attains $q(t_*)$. [F2, F3, F4, F5, step 3.2, algebra]

5.1 Conversely, a global minimizer must have $t=t_*$, since $V\ge q(t)\ge q(t_*)$ and the value $q(t_*)$ is attained in step 4.2. Equality in step 2.1 then forces $m\phi_2+y\phi_1\phi_3=0$ and $\bar k y\phi_3^2=ac t_*=2a(ac-b)/c$ by [F5]. Using $|k|^2=a^2$, the latter equation is equivalent to $\phi_3^2=\frac{2a(ac-b)}{c\bar k y}=\frac{2k}{y}\left(1-\frac{b}{ac}\right)$. The third-square equation gives $\phi_2=-y\phi_1\phi_3/m$. Thus the list in the Statement contains every minimizer. To count the roots, let $u$ be one root from step 4.2, so $u^2=\rho\ne0$. Any other root $w$ satisfies $(w-u)(w+u)=w^2-u^2=0$; because $\mathbb C$ is a field, $w=u$ or $w=-u$. They are distinct: equality would give $2u=0$, but [F6] gives $2\ne0$, and $u\ne0$. Hence there are exactly two distinct roots. [F2, F3, F5, F6, step 2.1, step 4.2, algebra]

6.1 At the minima of steps 4.2–5.1, $W_1=-k+\frac y2\phi_3^2=-\frac{kb}{ac}$, so $|W_1|=\frac bc>0$ by [F3]. Hence [F1] gives $F^1=-\bar W_1\ne0$, proving F-term breaking also in this regime. Step 3.1 gives the stronger bound and equality set when $b\ge ac$; the value $q(t_*)$ computed in step 3.2 is attained in step 4.2 and is strictly below $a^2$, disproving that bound for $b<ac$. The displayed minimizers in each case leave $\phi_1$ arbitrary, so the minimum is not isolated. All conclusions concern the pointwise potential; [A1] restricts spacetime field maps to compact support, and the proof does not treat nonzero constant backgrounds as admissible fields. [A1, F1, F3, step 3.1, step 3.2, step 4.2, step 5.1, algebra] ∎
