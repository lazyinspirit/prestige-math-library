---
id: fs-unrestricted-bounded-stable-faltings-height-implies-arithmetic-finiteness
kind: false-statement
title: "Unrestricted bounded stable Faltings height does not imply arithmetic finiteness"
aliases:
  - thm-faltings-finiteness-for-bounded-faltings-height
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - cor-genus-degree-smooth-plane-curve
  - lem-pointed-genus-one-curve-has-a-regular-group-law-by-relative-Riemann-Roch
  - thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism
  - thm-fundamental-theorem-of-arithmetic
  - def-stable-faltings-height-of-an-abelian-variety
  - def-neron-model-and-mapping-property
  - thm-stable-faltings-height-independent-of-semistable-extension
justified_by: []
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Elliptic Curves, second edition"
      url: "https://www.jmilne.org/math/Books/EC2.pdf"
      locator: "II.2.1(b), printed pp.50–51, coordinate changes; IV.7.12–7.16, printed pp.140–141, twists. The argument below reconstructs the needed coordinate calculations."
    - title: "Faltings–Wüstholz, Rational Points, Chapter V, Theorem 3.8"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Printed p.174 (PDF p.182): the source bounded-height theorem concerns semistable principally polarized varieties over a fixed number field. The preserved unrestricted claim is a false local overgeneralization, not this source theorem."
verification:
  precheck: pending
axiom_use: "AC and DC preserve the historical Statement branch. The genus-one group-law supplier uses AC; the explicit coordinate and prime-factor arguments require no additional choice. General stable-height definedness remains held."
---

## Statement

Assume AC and DC. Let $K$ be a number field, $g\ge1$, and $c\in\mathbb R$. There are only finitely many $K$-isomorphism classes of abelian varieties $A/K$ of dimension $g$ with stable Faltings height $h_F(A)\le c$.

## Statement references

[[def-stable-faltings-height-of-an-abelian-variety]]

[Milne, Elliptic Curves, II.2.1(b) and IV.7.12–7.16](https://www.jmilne.org/math/Books/EC2.pdf)

[Faltings–Wüstholz, Rational Points, V.3.8, printed p.174](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC and DC. The historical claim is interpreted with the advertised geometric stable Faltings height; the current local definedness proof of that notation remains held. The algebraic construction below independently disproves arithmetic finiteness for every real-valued function on geometric elliptic-curve classes.

[A1] [[def-axiom-of-choice]] and [[def-dependent-choice]]: these are the exact original axiom hypotheses, retained without strengthening.

[F1] [[cor-genus-degree-smooth-plane-curve]]: a smooth geometrically integral projective plane cubic has genus one.

[F2] [[lem-pointed-genus-one-curve-has-a-regular-group-law-by-relative-Riemann-Roch]]: under AC a smooth projective geometrically integral genus-one curve with a rational point has its regular group law with that identity.

[F3] [[thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism]]: a pointed morphism between the resulting abelian varieties is a group homomorphism.

[F4] [[thm-fundamental-theorem-of-arithmetic]]: a nonzero rational square has even valuation at each rational prime; every integer greater than one has a prime divisor.

[L1] [[def-stable-faltings-height-of-an-abelian-variety]] advertises stable height via a semistable extension. [[thm-stable-faltings-height-independent-of-semistable-extension]] is its still-held definedness obligation, not an accepted theorem input here. [[def-neron-model-and-mapping-property]] supplies the unique-extension property of any GIVEN Neron models. Step 7.1 explains the intended height reading conditionally; it supplies no missing general existence or base-change proof.

## Refutation

**Given:** [A1], [F1]–[F4], and the explicitly held interpretation boundary [L1].

1.1 Put $E:y^2=x^3-x+1$. For each positive rational prime $d$, let $E_d$ be the projective plane cubic $Y^2Z=X^3-d^2XZ^2+d^3Z^3$, with $O=[0:1:0]$. An affine singular point would satisfy $y=0$, $3x^2=d^2$ and $x^3-d^2x+d^3=0$. The last two equations give $x=3d/2$ and then $27d^2/4=d^2$, impossible in characteristic zero. At infinity the only point is $O$, and on $Y\ne0$ the equation is $v-u^3+d^2uv^2-d^3v^3=0$, whose $v$ derivative at $(0,0)$ is $1$. Thus $E_d$ is smooth geometrically. [given, algebra]

1.2 The cubic $x^3-d^2x+d^3$ is not a square in $\overline{\mathbb Q}(x)$ because it has odd pole order $3$ at infinity on the $x$-line. Hence its monic quadratic equation in $y$ is irreducible and defines a domain; homogenization adds no component at $Z=0$ because the homogeneous equation is not divisible by $Z$. The projective cubic is geometrically integral, and [F1] gives genus one. It is projective and has the rational point $O$, so [F2] makes it a one-dimensional abelian variety over $\mathbb Q$. [A1, F1, F2, step 1.1, algebra]

2.1 Over $\mathbb Q(\sqrt d)$ the projective diagonal map $[X:Y:Z]\mapsto[dX:d\sqrt dY:Z]$ takes $E$ to $E_d$: both cubic equations scale by $d^3$. This map has an explicit diagonal inverse and fixes $O$. Thus all $E_d$ are geometrically isomorphic, also as abelian varieties by [F3]. [F3, step 1.2, algebra]

3.1 At $O$ the local equation reads $v(1+d^2uv-d^3v^2)=u^3$, and the parenthesized factor is a unit. Therefore $u$ is a local parameter, $v$ has order $3$, and $x=u/v,y=1/v$ have poles of orders $2,3$. The complement of $O$ is the affine cubic, where each regular function is uniquely $f(x)+yg(x)$ with $f,g\in\mathbb Q[x]$. The leading pole orders of its nonconstant summands are respectively even $2\deg f$ and odd $3+2\deg g$, so cannot cancel. Consequently the functions with poles only at $O$ of order at most $2$ are exactly $\langle1,x\rangle$, and those of order at most $3$ are exactly $\langle1,x,y\rangle$. [step 1.1, algebra]

4.1 A pointed rational isomorphism $E_e\to E_d$ must therefore pull coordinates back as $x_d=ax_e+r$, $y_d=by_e+sx_e+t$, where $a,b\in\mathbb Q^*$ and $r,s,t\in\mathbb Q$; exact pole orders force $a,b\ne0$. Substitution into the equations, in the free basis $\{1,y_e\}$ over $\mathbb Q[x_e]$, gives $2b(sx_e+t)=0$, hence $s=t=0$. Comparing the cubic and quadratic coefficients gives $b^2=a^3$ and $3a^2r=0$, hence $r=0$. Comparing the linear and constant coefficients gives $b^2e^2=d^2a$ and $b^2e^3=d^3$. Thus $a^2=(d/e)^2$, $a^3=(d/e)^3$, and $a=d/e$. The rational number $b/a$ would have square $d/e$, impossible for distinct primes $d,e$ by [F4]. [F4, step 3.1, algebra]

4.2 Even an unpointed rational isomorphism would become pointed after translation by the negative of the rational image of $O$, so the $E_d$ are pairwise nonisomorphic in that sense as well. For any finite list of positive primes, a prime divisor of their product plus $1$ is absent from the list, by [F4]. Hence this family contains infinitely many rational isomorphism classes. The argument allows $d=2$ and imposes no good-reduction condition at $d$. [F4, step 1.2, step 4.1, algebra]

5.1 Let $H$ be ANY real-valued function on geometric isomorphism classes of elliptic curves. Set $c=H([E])$. By step 2.1 every $E_d$ has $H([E_d])=c$, whereas step 4.2 supplies infinitely many rational isomorphism classes. This unconditional universal-assignment result uses none of the held height/model/comparison theorems. [step 2.1, step 4.2, algebra]

7.1 For the intended stable-height reading, suppose the advertised notation in [L1] is well-defined. Choose a common finite extension where $E,E_d$ are isomorphic and the semistable Neron models used in that advertised construction are GIVEN. The mapping property extends the generic isomorphism and its inverse uniquely; the composites are the identity by uniqueness. Thus their invariant cotangent lines identify. On complex fibres change of variables under this holomorphic orientation-preserving isomorphism preserves the Faltings pairing, so the same-field normed-line heights coincide. The advertised independence of semistable extension then identifies these with $h_F(E)$ and $h_F(E_d)$. This is conditional interpretation of the stable-height notation, not a proof or acceptance of its currently held general definedness obligation. [L1, step 2.1, algebra]

8.1 Taking $K=\mathbb Q$, $g=1$ and $c=h_F(E)$ in this intended interpretation, steps 4.2 and 7.1 contradict the preserved finiteness assertion. Independently of unresolved local height authoring, step 5.1 shows that no real-valued invariant of geometric elliptic-curve classes can satisfy that unrestricted arithmetic assertion. The false Statement is not a logical supplier, and general stable-height definedness remains held. [step 4.2, step 5.1, step 7.1, algebra] ∎

## Proof status

The explicit algebraic/universal-assignment refutation is supplied. General stable-height existence and independence remain held exactly as recorded in [L1]; this carrier does not establish their readiness. The source bounded-height theorem concerns semistable principally polarized abelian varieties over a fixed field. A correct theorem with that scope or a fixed-bad-set hypothesis remains a separate local proof obligation. The former attempted route through height comparison, Northcott, finite forms and principal products is retained in the authenticated historical preimage, not invoked as a proof of this false unrestricted assertion.
