---
id: lem-smooth-plane-curve-unique-tangent
kind: lemma
title: Multiplicity one characterises smooth points with a unique tangent
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-minimal-prime-over-a-nonzerodivisor-has-height-one, cor-strong-nullstellensatz-two-inclusions, def-axiom-of-choice, def-field, def-germ-and-local-ring-classical-variety, def-irreducible-and-prime-elements-in-a-domain, def-krull-dimension-of-a-ring, def-local-ring, def-localisation-at-a-prime-ideal, def-multiplicity-plane-curve-point, def-plane-projective-curve, def-polynomial-evaluation-and-root, def-radical-of-an-ideal, def-singular-and-regular-loci-variety, def-tangent-lines-plane-curve-point, def-zariski-tangent-space-point, lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime, lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field, lem-local-intersection-length-finite, lem-projective-hypersurface-affine-pieces, thm-binomial-closed-formula, thm-binomial-theorem-over-a-commutative-ring, thm-characteristic-of-a-field-is-zero-or-prime, thm-jacobian-criterion-affine-variety, thm-local-ring-affine-variety-localization, thm-one-dimensional-regular-local-rings-are-dvrs, thm-zariski-tangent-space-jacobian-kernel]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C=V(F)$ be a plane projective curve over the algebraically closed field $k$ and $p\in C$. The following are equivalent: (1) $m_p(C)=1$; (2) $p$ is a regular (smooth) point of $C$, that is, not all partial derivatives $\partial F/\partial x_i$ vanish at $p$, which is independent of the chart and of the defining form; (3) the tangent cone at $p$ is a single line of multiplicity one. If these hold, $C$ has exactly one tangent line at $p$, and the local ring $\mathcal O_{C,p}$ is a regular local ring of dimension one. Points with $m_p(C)\ge2$ are the singular points of $C$; the singular locus of a plane curve is a proper closed subset.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, a plane projective curve $C=V(F)$ of degree $d\ge1$, a point $p\in C$, a standard chart $D_+(x_i)\ni p$ with ratio coordinates identified with $\mathbf A^2$, the dehomogenised square-free form $f$ and affine coordinates $(u,v)$ centred at $p$ [[lem-projective-hypersurface-affine-pieces]], [[def-plane-projective-curve]].

[F1] The local ring $O=\mathcal O_{\mathbf P^2,p}$ is a two-dimensional regular local ring with maximal ideal $\mathfrak m_p$, and $O$ is the localisation $k[u,v]_{(\mathfrak m)}$ of the plane at $p$ [[lem-local-intersection-length-finite]], [[def-local-ring]], [[thm-local-ring-affine-variety-localization]], [[def-germ-and-local-ring-classical-variety]], [[def-localisation-at-a-prime-ideal]].

[F2] The Jacobian criterion at a $k$-rational point: for $A=k[u,v]/(f)$ and its maximal ideal $\mathfrak n$ corresponding to $p$, the rank of the Jacobian matrix $(f_u,f_v)$ over $k$ equals $2-\dim A_{\mathfrak n}$ if and only if $A_{\mathfrak n}$ is regular; at a $k$-rational point no perfectness hypothesis is needed, and $\dim A_{\mathfrak n}=\dim_p C$ [[thm-jacobian-criterion-affine-variety]]. The Zariski tangent space at $p$ is the kernel of the Jacobian map [[thm-zariski-tangent-space-jacobian-kernel]], [[def-zariski-tangent-space-point]].

[F3] The tangent cone at $p$ is $V(f_m)$ for $m=m_p(C)$ and the tangent lines with their multiplicities satisfy $\sum_L r_L=m$ [[def-tangent-lines-plane-curve-point]], [[def-multiplicity-plane-curve-point]].

[F4] A point of the curve is regular exactly when its local ring is a regular local ring [[def-singular-and-regular-loci-variety]]; a Noetherian local ring that is regular and one-dimensional is a discrete valuation ring [[thm-one-dimensional-regular-local-rings-are-dvrs]].

[F5] The local ring $A_{\mathfrak n}=O/(f)$ has dimension one: $f$ is a nonzerodivisor in the domain $O$, so every minimal prime over $(f)$ has height one [[cor-minimal-prime-over-a-nonzerodivisor-has-height-one]], each is strictly below the height-two maximal ideal, giving a length-one prime chain in $O/(f)$. No length-two chain is possible there, since adjoining the prime $(0)$ of the domain $O$ would give a length-three chain in the dimension-two ring $O$. Thus $\dim A_{\mathfrak n}=1$ [[def-krull-dimension-of-a-ring]].

[F6] Over the algebraically closed field, the vanishing ideal of the affine curve $V(f)$ for square-free $f$ is $\sqrt{(f)}=(f)$, by the strong Nullstellensatz and the fact that a product of distinct primes is radical [[cor-strong-nullstellensatz-two-inclusions]], [[def-radical-of-an-ideal]], [[def-irreducible-and-prime-elements-in-a-domain]]. The Axiom of Choice is used through the Nullstellensatz and the Jacobian-criterion dimension identification [[def-axiom-of-choice]].

[F7] The positive characteristic of a field is prime [[thm-characteristic-of-a-field-is-zero-or-prime]], and every positive natural scalar smaller than that prime is invertible [[lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field]]. If a polynomial in two variables over a field of characteristic $p>0$ has both partial derivatives zero, then all its monomial exponents are divisible by $p$, so it is a $p$-th power: in characteristic $p$ the Frobenius identity $(a+b)^p=a^p+b^p$ follows from the binomial theorem [[thm-binomial-theorem-over-a-commutative-ring]]: for $0<i<p$, the identity $\binom pi i!(p-i)!=p!$ [[thm-binomial-closed-formula]] has invertible factorial factors in the field, while $p!=0$, so $\binom pi=0$ in the field [[def-field]], and the coefficients of an algebraically closed field are $p$-th powers.

## Proof

1.1 In the chart, $f$ is square-free with $f(p)=0$, and the expansion around $p$ is $f=f_m+f_{m+1}+\cdots$ with $m=m_p(C)\ge1$ and $f_m\ne0$. The partial derivatives satisfy $f_u,f_v\in\mathfrak m_p^{m-1}$: differentiating a degree-$j$ term lowers its order by one. Hence if $m\ge2$ both partial derivatives vanish at $p$, while if $m=1$ the lowest part $f_1=au+bv$ is a nonzero linear form and $(f_u(p),f_v(p))=(a,b)\ne(0,0)$. [F3, given, algebra]

1.2 The lowest part $f_m$ is a line if and only if $m=1$, and $V(f_m)$ is a single line of multiplicity one exactly when the factorisation of [F3] has one factor with exponent one, which happens exactly when $\sum_L r_L=m=1$. Thus (1) and (3) are equivalent: a single tangent line of multiplicity one is a single nonzero linear form, and conversely if $m\ge2$ the sum of the multiplicities is at least two, giving either at least two tangent lines or one line of multiplicity at least two. [F3, algebra]

2.1 The Jacobian matrix of the single equation $f$ at $p$ is the $1\times2$ matrix $(f_u(p),f_v(p))$, whose rank over $k$ is $0$ or $1$. By [F2] and [F5], $A_{\mathfrak n}=O/(f)$ has dimension $1$, so the rank is $2-\dim A_{\mathfrak n}=1$ if and only if $A_{\mathfrak n}$ is regular. By step 1.1 the rank is $1$ if and only if $m=1$. Therefore (1) if and only if $p$ is regular, and regularity is independent of the chart and the defining form because $m_p(C)$ is [[def-multiplicity-plane-curve-point]]. To compare with the homogeneous derivatives, take a representative with $x_i=1$. The affine derivatives are the other two homogeneous partials evaluated there; the termwise Euler identity $\sum_jx_jF_{x_j}=dF$ gives $F_{x_i}(p)=-\sum_{j\ne i}x_j(p)F_{x_j}(p)$ because $F(p)=0$. Thus all three homogeneous partials vanish exactly when both affine ones do, in every characteristic, without dividing by $d$. This proves (2) and identifies the singular points of the chart as those with $m\ge2$. [step 1.1, F1, F2, F4, F5]

3.1 Assume $m=1$. By step 1.2 and [F3] there is exactly one tangent line and its multiplicity is one; by step 2.1 the local ring $\mathcal O_{C,p}$ is a one-dimensional regular local ring. If $m\ge2$, step 2.1 shows $p$ is singular. In the chart the singular points are the common zeros of $f,f_u,f_v$, a closed subset of the affine curve. It is proper: not all partial derivatives of the square-free $f$ can vanish, because in characteristic zero that would force $f$ to be constant, while in characteristic $p>0$ both vanishing partials would make $f=g^p$ a $p$-th power by [F7], and a nonconstant $p$-th power is not square-free [[def-irreducible-and-prime-elements-in-a-domain]]; so after interchanging $u,v$ if necessary, some partial $f_u\ne0$, its degree is at most $\deg f-1<\deg f$, hence $f\nmid f_u$ and by [F6] $f_u$ does not vanish on all of $V(f)$. Covering $C$ by the three standard charts and using the chart-independence of the multiplicity, the singular locus of $C$ is closed in $C$ and not all of $C$. [step 1.2, step 2.1, F3, F4, F6, F7] ∎ 