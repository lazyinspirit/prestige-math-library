---
id: lem-elliptic-y2-x3-minus-3-has-trivial-rational-torsion
kind: lemma
title: The curve y² = x³ − 3 has trivial rational torsion
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-plane-cubic-chord-tangent-group-law
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: AC is inherited from the stated plane-cubic group-law supplier.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Plane cubic chord-tangent group law, local library
      locator: The displayed field-level group law is used. Good-reduction formal-parameter and finite-point calculations below are supplied locally.
---

## Statement

Assume AC. For the elliptic curve $E/\mathbb Q$ with affine equation $y^2=x^3-3$ and origin $O$ at infinity, the rational torsion subgroup is trivial. This is a torsion statement only; it does not assert that the Mordell–Weil rank is zero.

## Statement references

[[thm-plane-cubic-chord-tangent-group-law]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The specified curve and its rational chord-tangent group law.

[F1] The displayed nonsingular short Weierstrass cubic carries the chord-tangent group law, including the doubling and inversion formulas. [[thm-plane-cubic-chord-tangent-group-law]]

[A1] AC supplies the literal hypothesis of [F1]. [[def-axiom-of-choice]]

## Proof

**Proof technique:** bound prime-to-residue-characteristic torsion by two good reductions, then eliminate the remaining order three.

1.1 The discriminant $-3888$ is a unit at $p=5,7$, so the same projective equation is smooth over $\mathbb Z_p$. A rational point extends uniquely to a projective $\mathbb Z_p$-point by scaling integral projective coordinates until one is a unit, and its reduction lies on the smooth cubic. Near $O$ use $t=-X/Y$ and $w=-Z/Y$, so the equation is $w=t^3-3w^3$. It recursively determines an odd formal series $w(t)\in\mathbb Z_p\llbracket t\rrbracket$ with leading term $t^3$. We now derive the integral addition series without importing a formal-group theorem. Write $A=(w(t)-w(u))/(t-u)$ and $D=(w(t)/t-w(u)/u)/(t-u)$; both are integral formal series because the numerators are divisible by $t-u$. The chord through $(t:-1:w(t))$ and $(u:-1:w(u))$ meets the parameterized cubic where $f(z)=w(z)-Az+tuD$ vanishes. It has roots $z=t,u$. Divide $f(z)$ by the monic polynomial $(z-t)(z-u)$ in the complete formal-series ring: the division exists integrally by reducing each power $z^j$ and taking the coefficientwise limit, since the reduction coefficients have increasing $(t,u)$-degree. Its remainder is $r_0+r_1z$; evaluating at $t$ and $u$ gives $(t-u)r_1=0$, and the integral domain $\mathbb Z_p\llbracket t,u\rrbracket$ therefore gives $r_0=r_1=0$. Thus $f(z)=(z-t)(z-u)Q(t,u,z)$ with $Q\equiv z+t+u$ modulo terms of total degree at least two, since $w(z)=z^3+O(z^9)$. The coefficient of $z$ in $Q$ is a unit, so solving $Q=0$ recursively gives a unique integral formal series $z_3(t,u)$ with leading term $-t-u$. The chord-tangent law [F1] makes the sum parameter $F(t,u)=-z_3(t,u)$. To see the identity exactly, put $u=0$: $f(-t)=0$ because $w$ is odd, and $(z-t)z$ is nonzero at $z=-t$, so the quotient gives $Q(t,0,-t)=0$; uniqueness yields $F(t,0)=t$, and similarly $F(0,u)=u$. Consequently $F=t+u+tuG$ for an integral formal series $G$. Repeated addition gives $[m](t)=mt+t^2H_m(t)$ with $H_m\in\mathbb Z_p\llbracket t\rrbracket$. A point in the reduction kernel has $t\in p\mathbb Z_p$; if $p\nmid m$ and $t\ne0$, then $v_p([m](t))=v_p(t)$, so it cannot be killed by $m$. Hence reduction is injective on torsion of order prime to $p$; the same integral chord construction gives its compatibility with the smooth special-fibre law. [F1, A1, given, construct, algebra]

2.1 Directly count the special-fibre points. Over $\mathbb F_5$ the affine points are $(2,0),(3,2),(3,3),(4,1),(4,4)$; including $O$ gives $\#E(\mathbb F_5)=6$. Over $\mathbb F_7$ the affine points are $(0,2),(0,5)$; including $O$ gives $\#E(\mathbb F_7)=3$. If a rational torsion point has order $m$, step 1.1 at $5$ shows that its prime-to-$5$ part divides $6$, and at $7$ its prime-to-$7$ part divides $3$. The second bound excludes a factor of $5$, and the first excludes a factor of $7$; hence $m$ divides both $6$ and $3$, so $m\mid3$. [step 1.1, construct, algebra]

3.1 Suppose a nonidentity rational point $P=(x,y)$ has order $3$. Then $y\ne0$, and $2P=-P$. By [F1], $x(2P)=(3x^2/(2y))^2-2x$ must equal $x$. Substituting $y^2=x^3-3$ and clearing the nonzero denominator gives $3x(12-x^3)=0$. If $x=0$, then $y^2=-3$, impossible over $\mathbb Q$. If $x^3=12$, the 2-adic valuation of $x^3$ is divisible by $3$, whereas $v_2(12)=2$, also impossible. Therefore no such $P$ exists and the rational torsion subgroup is trivial. [F1, step 2.1, cases, algebra] ∎
