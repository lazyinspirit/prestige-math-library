---
id: lem-em-admittance-interface-solve
kind: lemma
title: "The two-equation interface admittance system: solution formulas and the normal-flux identity"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, lem-em-interface-wave-linear-system, def-ordered-field, lem-of-square-monotone, lem-of-square-positive]
dependency_roles:
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-em-interface-wave-linear-system: mathematical-premise
  def-ordered-field: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  lem-of-square-positive: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "\u00a77.4.1 printed pp. 189-191: the $s$- and $p$-polarised Fresnel amplitude systems and their solutions (7.26)-(7.27), obtained by matching the tangential fields; the interface-system algebra abstracted here is that computation with the admittances left general and complex."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "\u00a79.3.2 printed pp. 384-386, Eqs. (9.78)-(9.82): the two-equation normal-incidence system $E_{0i}+E_{0r}=E_{0t}$, $E_{0i}-E_{0r}=\\beta E_{0t}$ and its solution; \u00a79.3.3 printed pp. 389-391, Eqs. (9.105)-(9.109): the analogous parallel-polarisation system $E_{0i}-E_{0r}=\\beta E_{0t}$, $E_{0i}+E_{0r}=\\alpha E_{0t}$ with real positive coefficients."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10

---

## Statement

Let $Y_1,Y_2\in\mathbb C$ with $Y_1+Y_2\ne0$, and let $E_i,E_r,E_t\in\mathbb C$ satisfy the two linear equations

$$E_i+E_r=E_t,\qquad Y_1(E_i-E_r)=Y_2E_t.$$

Then: (a) [Solution] If $E_i\ne0$, then
$$r:=\frac{E_r}{E_i}=\frac{Y_1-Y_2}{Y_1+Y_2},\qquad t:=\frac{E_t}{E_i}=\frac{2Y_1}{Y_1+Y_2};$$
if $E_i=0$ then $E_r=E_t=0$ and the field ratios are undefined. Throughout (b)-(d), $r,t$ denote the displayed algebraic transfer coefficients $(Y_1-Y_2)/(Y_1+Y_2)$ and $2Y_1/(Y_1+Y_2)$, which are defined independently of $E_i$; when $E_i\ne0$ they equal the field ratios of (a). (b) [Normal-flux identity] If $Y_1>0$ is real (the incident side admittance), then
$$|r|^2+\frac{\operatorname{Re}Y_2}{Y_1}\,|t|^2=1,$$
and explicitly $|t|^2=\dfrac{4Y_1^2}{|Y_1+Y_2|^2}$ and $|r|^2=1-\dfrac{4Y_1\operatorname{Re}Y_2}{|Y_1+Y_2|^2}$. The second summand $(\operatorname{Re}Y_2/Y_1)|t|^2$ is nonnegative if and only if $\operatorname{Re}Y_2\ge0$; it is the normal-flux coefficient of a passive transmitted medium and may be negative for an active one, in which case $|r|>1$ and the identity carries no energy-conservation reading. (c) [Pure-imaginary admittance] If $Y_1>0$ is real and $Y_2$ is purely imaginary, then $|r|=1$, $\operatorname{Re}Y_2\,|t|^2=0$ and $|t|^2=\dfrac{4Y_1^2}{Y_1^2+|Y_2|^2}>0$; in particular $r\ne0$ and $t\ne0$. (d) [Real-positive specialisation] If $Y_1,Y_2>0$ are real, then $r=(Y_1-Y_2)/(Y_1+Y_2)$ and $t=2Y_1/(Y_1+Y_2)$ are real and $|r|^2+(Y_2/Y_1)|t|^2=1$; with $Y_j=1/Z_j$, $Z_j>0$, this is $r=(Z_2-Z_1)/(Z_1+Z_2)$, $t=2Z_2/(Z_1+Z_2)$ and $R+T=1$ for $R=|r|^2$, $T=(Z_1/Z_2)|t|^2$, in agreement with [[lem-em-interface-wave-linear-system]]. (e) [Scope] The lemma is pure algebra of $\mathbb C$; the labels 'incident', 'reflected' and 'transmitted' and the interpretation of the second summand as a flux fraction belong to the consuming physical theorem, not to this lemma.

## Facts & Assumptions

**Given:** Complex numbers $Y_1,Y_2$ with $Y_1+Y_2\ne0$ and complex numbers $E_i,E_r,E_t$ satisfying $E_i+E_r=E_t$ and $Y_1(E_i-E_r)=Y_2E_t$; the transfer coefficients $r=(Y_1-Y_2)/(Y_1+Y_2)$ and $t=2Y_1/(Y_1+Y_2)$.

[F1] Field arithmetic in $\mathbb C$: $\mathbb C$ is a field, every element has the unique form $a+bi$ with $a,b\in\mathbb R$, addition and multiplication follow the coordinate formulas, $(a+bi)^{-1}=(a-bi)/(a^2+b^2)$ for $a+bi\ne0$, and a product of nonzero field elements is nonzero ([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]]).

[F2] Conjugation and modulus: $z\overline z=|z|^2$, $|zw|=|z||w|$, $|z|\ge0$ with $|z|=0$ exactly for $z=0$, conjugation is an involutive real-field automorphism fixing every real number, and $|\overline z|=|z|$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F3] Real order: the real numbers form an ordered field with positive cone $P$ ([[def-ordered-field]]): by trichotomy a positive real is nonzero, and by closure sums and products of positive reals are positive; the same axioms give that the product of two nonzero reals of equal sign is positive and of opposite signs is negative, and that division by the positive real $Y_1$ preserves the sign of a quotient, since $a=(a/Y_1)Y_1$ has the sign of $a/Y_1$ when $Y_1>0$.

[F4] Squares in an ordered field: the square of a nonzero element is positive ([[lem-of-square-positive]]), and for $a,b\ge0$ one has $a<b$ if and only if $a^2<b^2$ ([[lem-of-square-monotone]]).

[F5] The normal-incidence interface lemma [[lem-em-interface-wave-linear-system]]: for real $\varepsilon_j,\mu_j>0$, $Z_j=\sqrt{\mu_j/\varepsilon_j}>0$, and $E_i,E_r,E_t\in\mathbb C$ with $E_i\ne0$ satisfying $E_i+E_r=E_t$ and $(E_i-E_r)/Z_1=E_t/Z_2$, one has $E_r/E_i=(Z_2-Z_1)/(Z_1+Z_2)$, $E_t/E_i=2Z_2/(Z_1+Z_2)$, and $R+T=1$ for $R=|E_r/E_i|^2$, $T=(Z_1/Z_2)|E_t/E_i|^2$.

## Proof

**Proof technique:** direct; solve the two linear equations by substitution, expand the moduli with $|z|^2=z\overline z$, and read the sign statements off the ordered-field structure of $\mathbb R$.

1.1 [Solution of the linear system] Substituting the first equation $E_r=E_t-E_i$ into the second gives $Y_1(2E_i-E_t)=Y_2E_t$, that is $2Y_1E_i=(Y_1+Y_2)E_t$ after expanding and collecting terms by the field arithmetic of [F1]. Since $Y_1+Y_2\ne0$ is invertible in the field $\mathbb C$ by [F1], $E_t=2Y_1E_i/(Y_1+Y_2)$, and then $E_r=E_t-E_i=\bigl(2Y_1-(Y_1+Y_2)\bigr)E_i/(Y_1+Y_2)=(Y_1-Y_2)E_i/(Y_1+Y_2)$, again by [F1]. [given, F1, algebra]

2.1 [Consequences of the solution] If $E_i\ne0$, dividing the two identities of step 1.1 by $E_i$ gives $r=E_r/E_i=(Y_1-Y_2)/(Y_1+Y_2)$ and $t=E_t/E_i=2Y_1/(Y_1+Y_2)$. If $E_i=0$, the identities of step 1.1 give $E_t=0$ and $E_r=0$, so no field ratio exists; the algebraic expressions $r=(Y_1-Y_2)/(Y_1+Y_2)$ and $t=2Y_1/(Y_1+Y_2)$ remain defined because $Y_1+Y_2\ne0$, and they agree with the field ratios whenever the latter exist. This proves (a) and the convention stated before (b). [step 1.1, F1, algebra]

3.1 [Modular expansions] For any $z,w\in\mathbb C$, $|z\pm w|^2=(z\pm w)(\overline z\pm\overline w)=|z|^2\pm(z\overline w+\overline z w)+|w|^2$, and $z\overline w+\overline z w=2\operatorname{Re}(z\overline w)$ by [F2]; hence for real $Y_1$ and arbitrary $Y_2$, $|Y_1\pm Y_2|^2=Y_1^2\pm2Y_1\operatorname{Re}Y_2+|Y_2|^2$, and subtraction gives $|Y_1+Y_2|^2-|Y_1-Y_2|^2=4Y_1\operatorname{Re}Y_2$. Moreover $|r|^2=|Y_1-Y_2|^2/|Y_1+Y_2|^2$ and $|t|^2=4Y_1^2/|Y_1+Y_2|^2$: indeed $|zw|=|z||w|$ and $|z|^2=z\overline z$ by [F2] applied to the quotients of step 2.1 give $|r|^2=|Y_1-Y_2|^2|Y_1+Y_2|^{-2}$ and $|t|^2=|2Y_1|^2|Y_1+Y_2|^{-2}=4Y_1^2|Y_1+Y_2|^{-2}$ because $(2Y_1)\overline{(2Y_1)}=4Y_1^2$ for real $Y_1$, and the denominator is nonzero since $Y_1+Y_2\ne0$. [step 2.1, F2, algebra]

4.1 [The flux identity] Assume $Y_1>0$ real. By [F2] and [F3], $|Y_1+Y_2|^2>0$, so $|t|^2=4Y_1^2/|Y_1+Y_2|^2>0$, and the identity of step 3.1 gives $|r|^2=|Y_1-Y_2|^2/|Y_1+Y_2|^2=1-4Y_1\operatorname{Re}Y_2/|Y_1+Y_2|^2$; adding $(\operatorname{Re}Y_2/Y_1)|t|^2=4Y_1\operatorname{Re}Y_2/|Y_1+Y_2|^2$ cancels the correction and yields $|r|^2+(\operatorname{Re}Y_2/Y_1)|t|^2=1$, the displayed identity and explicit formulas of (b). [step 3.1, F1, F2, F3, algebra]

5.1 [Sign analysis] Still with $Y_1>0$ real: since $|t|^2>0$ by step 4.1, the second summand $(\operatorname{Re}Y_2/Y_1)|t|^2$ has the sign of $\operatorname{Re}Y_2$ by [F3], so it is nonnegative if and only if $\operatorname{Re}Y_2\ge0$. If $\operatorname{Re}Y_2<0$, then $|r|^2=1-4Y_1\operatorname{Re}Y_2/|Y_1+Y_2|^2>1$, and since $|r|\ge0$ and $1\ge0$, [F4] gives $|r|>1$; in that case the identity of step 4.1 has a negative transmitted term and carries no energy-conservation reading, while $|r|>1$ alone is consistent with an active transmitted model. [step 4.1, F3, F4, algebra]

5.2 [Purely imaginary admittance] Assume $Y_1>0$ real and $Y_2=i\beta$ with $\beta\in\mathbb R$. Then $\overline{Y_1+Y_2}=Y_1-i\beta=Y_1-Y_2$ by [F2], so $|Y_1-Y_2|=|\overline{Y_1+Y_2}|=|Y_1+Y_2|$ by [F2] and step 3.1 gives $|r|=1$; the identity of step 4.1 then gives $\operatorname{Re}Y_2\,|t|^2=0$ (multiplying the identity by $Y_1>0$ and using $|r|^2=1$), while $|t|^2=4Y_1^2/|Y_1+Y_2|^2=4Y_1^2/(Y_1^2+\beta^2)=4Y_1^2/(Y_1^2+|Y_2|^2)>0$ by [F2] and [F3]; hence $r\ne0$ because $|r|=1$ and $t\ne0$ because $|t|>0$ by the definiteness of the modulus in [F2]. This proves (c); no division by $\operatorname{Re}Y_2=0$ is performed, and the case $Y_2=0$ is included with $\beta=0$. [step 4.1, step 3.1, F2, F3, algebra]

5.3 [Real-positive specialisation] Assume $Y_1,Y_2>0$ real. Then $Y_1-Y_2$ is real and $Y_1+Y_2>0$ is real and nonzero, so $r,t$ of step 2.1 are real by [F1], and step 4.1 gives $|r|^2+(Y_2/Y_1)|t|^2=1$ because $\operatorname{Re}Y_2=Y_2$. Substituting $Y_j=1/Z_j$ with $Z_j>0$ real, $Y_j$ is invertible and $1/Z_1\pm1/Z_2=(Z_2\pm Z_1)/(Z_1Z_2)$ by [F1], so $r=(Z_2-Z_1)/(Z_1+Z_2)$ and $t=2Z_2/(Z_1+Z_2)$ by cancellation of the nonzero factor $Z_1Z_2$; moreover $Y_2/Y_1=Z_1/Z_2$ by [F1], so the balance is $R+T=1$ for $R=|r|^2$ and $T=(Z_1/Z_2)|t|^2$. These are exactly the solution formulas and the balance of [F5], so clause (d) is in agreement with [[lem-em-interface-wave-linear-system]]. [step 4.1, step 2.1, F1, F5, algebra]

6.1 [Scope] Clause (e) holds: the entire argument is algebra in the field $\mathbb C$ together with the ordered-field arithmetic of the real scalars $Y_1,\operatorname{Re}Y_2$; no wave model, no labelling of the amplitudes and no interpretation of the second summand is used, and no choice principle occurs, all divisions being by explicitly nonzero field elements. [given, F1, F5, algebra] ∎
