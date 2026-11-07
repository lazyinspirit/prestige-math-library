---
id: lem-mordell-minus-three-three-divisibility
kind: lemma
title: Every rational point of y² = x³ − 3 is divisible by three
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-plane-cubic-chord-tangent-group-law
  - thm-valuative-criterion-properness
  - thm-local-ring-smooth-curve-dvr
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: AC is inherited from the plane-cubic group-law supplier. The number-theoretic selections and congruence checks are finite.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The plane-cubic chord-tangent group law, local library
      url: https://www.jmilne.org/math/Books/ectext6.pdf
      locator: The local group-law supplier supplies its stated chord and tangent formulas. The specialized two-sided cubic descent and explicit isogeny calculations below are reconstructed locally.
---

## Statement

Assume AC. Let $E/\mathbb Q$ be the smooth projective curve $y^2=x^3-3$ with origin at infinity and its chord-tangent group law. Then $E(\mathbb Q)=3E(\mathbb Q)$. This is a divisibility assertion; it does not itself assert finite generation or triviality.

## Statement references

[[thm-plane-cubic-chord-tangent-group-law]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** AC, the specified curve and its rational group law.

[F1] The two nonsingular short Weierstrass cubics below have the chord-tangent laws and displayed doubling/addition formulas. [[thm-plane-cubic-chord-tangent-group-law]]

[F2] The local ring at a smooth curve point is a DVR; a rational map from a smooth proper curve to a proper variety extends uniquely there by the valuative criterion. [[thm-local-ring-smooth-curve-dvr]] [[thm-valuative-criterion-properness]]

[A1] AC supplies the literal hypothesis of [F1]. [[def-axiom-of-choice]]

## Proof

**Proof technique:** two explicit cubic descents linked by the 3-isogeny formulas.

1.1 Let $K=\mathbb Q(\lambda)$ with $\lambda^2=-3$ and $\omega=(-1+\lambda)/2$. The ring $\mathcal O=\mathbb Z[\omega]$ is Euclidean for the norm $N(a+b\omega)=a^2-ab+b^2$: in the triangular lattice, round the two real coefficients of any complex number to a nearest lattice point; the squared distance is at most $3/4<1$. Division with remainder therefore holds, so $\mathcal O$ is a unique factorization domain. Its units are $\pm1,\pm\omega,\pm\omega^2$, and $2$ is prime because $\mathcal O/(2)\cong\mathbb F_4$. Each of the six unit residues is $1,\omega$, or $\omega^2$ modulo $2$, and only $\pm1$ reduce to $1$. [given, construct, algebra]

2.1 Let $P=(x,y)\in E(\mathbb Q)$ be affine. Write $x=r/s^2$ and $y=t/s^3$ with integers $r,t,s$, $s>0$, and $\gcd(r,s)=\gcd(t,s)=1$. These denominator exponents follow by comparing each negative prime valuation in $y^2=x^3-3$. Then $t^2+3s^6=r^3$. If $t,s$ were both odd, the left side would be $4$ modulo $8$, whereas a cube modulo $8$ is $0,1,3,5$, or $7$; hence they have opposite parity. Also $3\nmid t$: if $3\mid t$ and $3\nmid s$ the left side has 3-adic valuation one, and if $3\mid s$ coprimality excludes $3\mid t$. Thus $\alpha=t+s^3\lambda$ and its conjugate are coprime in $\mathcal O$: a common prime divides $2t$ and $2s^3\lambda$, so it can only lie above $2$ or $3$, but opposite parity makes $\alpha\equiv1\pmod2$ and $3\nmid t$ excludes the prime above $3$. [step 1.1, given, construct, algebra]

3.1 By step 2.1, $\alpha\bar\alpha=r^3$ and unique factorization imply $\alpha=\varepsilon\beta^3$ for a unit $\varepsilon$ and $\beta\in\mathcal O$. Reduction modulo the inert prime $2$ gives $1=\varepsilon\beta^3$ in $\mathbb F_4$; since $\beta$ is nonzero there and every nonzero element of $\mathbb F_4$ has cube $1$, the unit reduces to $1$. By step 1.1, $\varepsilon=\pm1$, both cubes. Hence $y+\lambda=(\beta/s)^3$. Write $\beta/s=a+b\lambda$ with $a,b\in\mathbb Q$. Comparing imaginary and real parts gives $3b(a^2-b^2)=1$, $y=a^3-9ab^2$, and taking norms gives $x=a^2+3b^2$. In particular $b\ne0$. [step 1.1, step 2.1, construct, algebra]

4.1 Let $E':Y^2=X^3+81$, and put $T=(0,-9)$. Define rational maps on their affine nonzero-coordinate domains by $\phi(x,y)=((x^3-12)/x^2,\ y(x^3+24)/x^3)$ and $\psi(X,Y)=((X^3+324)/(9X^2),\ Y(X^3-648)/(27X^3))$. Direct substitution shows their images satisfy the target equations; [F2] extends each map uniquely over the missing points. The formulas give $\phi(O)=\psi(O)=O$ and $\psi(T)=\psi(-T)=O$: at $X=0$ the first coordinate of $\psi$ has a pole, while it has a pole at infinity as well. For the $a,b$ in step 3.1 put $X=3/b$ and $Y=9a/b$. The identity $3b(a^2-b^2)=1$ gives $Y^2=X^3+81$, and the displayed formulas give $\psi(X,Y)=(a^2+3b^2,a^3-9ab^2)=P$. Thus every point of $E(\mathbb Q)$ is in the image of $\psi$, including $O$. [F1, F2, A1, step 3.1, construct, algebra]

5.1 For $Q=(X,Y)\in E'(\mathbb Q)$ with $X\ne0$ set $\delta=Y-9$. Then $\delta(\delta+18)=X^3$. At a prime $\ell\ne2,3$, a positive valuation of $\delta$ is a multiple of three because $\delta+18$ is a unit, and a negative valuation is a multiple of three because the two factors have equal valuation. Thus the rational cube class of $\delta$ has a representative $2^e3^f$ with $0\le e,f<3$. A 3-adic unit cube is $\pm1$ modulo $9$. If $v_3(\delta)<2$, the two factors have the same valuation, so $f=0$, and the unit part of $\delta^2$ must be a cube modulo $9$; this forces $e=0$. If $v_3(\delta)>2$, the other factor has valuation $2$, giving $f=1$; its unit is $2$ modulo $9$, so $2^{e+1}\equiv\pm1\pmod9$ and $e=2$. If $v_3(\delta)=2$, write $\delta=9v$ with $v$ a unit. Since $4+v_3(v+2)$ is a multiple of $3$, one has $v\equiv7\pmod9$; hence $f=2,e=1$. Therefore the only classes are $1,18,12$, the subgroup generated by $-18$ because $18^2/12=27$ and $-1$ is a cube. [step 4.1, given, cases, construct, algebra]

6.1 For $Q=(X,Y)$ with $X\ne0$ put $r=(Y+9)/X$. By [F1] the coordinates of $Q+T$ are $X_1=r^2-X=18r/X$ and $Y_1=9-rX_1$; the first equality uses $X^2=r^2X-18r$, derived from $Y^2=X^3+81$. Consequently $(Y_1-9)/(Y-9)=-18(r/X)^3$: indeed $Y_1-9=-18r^2/X$ and $Y-9=X^2/r$. Thus translation by $T$ multiplies the $\delta$ cube class by $-18$. The only rational points with $X=0$ are $T$ and $-T$, both in the subgroup generated by $T$; the tangent at either meets the cubic with multiplicity three, so $3T=O$ by [F1]. By step 5.1, after adding a suitable multiple of $T$ any other rational point has $\delta=q^3$ with $q\in\mathbb Q^\times$, unless that translate is $O$ or $\pm T$. [F1, step 5.1, given, cases, algebra]

7.1 Suppose $R=(X,Y)$ has $Y-9=q^3\ne0$, and put $h=X/q$. The identity $X^3=q^3(q^3+18)$ gives $h^3-q^3=18$, so $h\ne q$. Put $x=6/(h-q)$ and $y=3(h+q)/(h-q)$. Then $y^2=x^3-3$, since $(h-q)^3+3(h+q)^2(h-q)=4(h^3-q^3)=72$. Moreover $(y-3)/x=q$, and $x-12/x^2=qh=X$ using the same cubic identity. Finally $\phi(x,y)$ has second coordinate $9+q^3=Y$, because $\phi_y-9=(y-3)^3/x^3$. Thus $R=\phi(x,y)$. Together with step 6.1, this proves that every rational point of $E'$ is either a multiple of $T$ or a translate of a point in $\phi(E(\mathbb Q))$ by a multiple of $T$. [F1, step 6.1, cases, construct, algebra]

8.1 The explicit maps also satisfy $\psi(Q+T)=\psi(Q)$ and $\psi(\phi(P))=3P$. For the first identity, use the notation of step 6.1: $XX_1=18r$ and $X+X_1=r^2$ imply $X^2X_1^2=324(X+X_1)$, so $X/9+36/X^2=X_1/9+36/X_1^2$. The corresponding second coordinates have the same square; their Laurent leading terms at $Q\to O$ agree, so they are equal, and [F2] extends the identity to all points. For the second identity, direct doubling and addition by [F1] give $x(3P)=(x^9+288x^6+432x^3-1728)/(9x^2(x^3-12)^2)$, which is exactly the first coordinate of $\psi(\phi(P))$. Their second coordinates have the same square, and their leading terms at $O$ agree: in the local parameter $t=-x/y$, both are $-1/(27t^3)+O(t^{-1})$. They are therefore equal, with [F2] supplying the exceptional points. By step 7.1, for any $P\in E(\mathbb Q)$ choose $Q$ with $\psi(Q)=P$; remove a multiple of $T$ without changing its $\psi$-image, and write the result as $\phi(P_0)$. Then $P=\psi(\phi(P_0))=3P_0$. Hence $E(\mathbb Q)=3E(\mathbb Q)$. [F1, F2, step 4.1, step 7.1, given, construct, algebra] ∎
