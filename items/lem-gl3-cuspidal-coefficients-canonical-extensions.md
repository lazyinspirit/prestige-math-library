---
dependency_level: 7
id: lem-gl3-cuspidal-coefficients-canonical-extensions
kind: lemma
title: "Canonical Extensions of Cuspidal GL3 Fourier Coefficients"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension
  - lem-gl3-canonical-extension-is-unique
  - def-full-level-gl3-automorphic-distribution
  - thm-gl3-heisenberg-fourier-expansion
  - lem-gl3-periodic-zero-mean-distribution-canonical-at-infinity
  - thm-gl3-fourier-transform-preserves-infinite-order
  - def-countable-choice
  - lem-gl3-unipotent-character-descent-and-rank-one-boundary-model
  - thm-gl3-embedded-sl2-fourier-coefficient-relations
  - lem-gl3-uniform-flat-families-and-compact-averaging
  - lem-gl3-boundary-flag-geometry-and-normal-order-nilpotence
  - lem-gl3-flat-distribution-power-multipliers-and-tempered-reciprocals
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials
  - thm-finite-fourier-inversion
  - thm-distributions-form-a-sheaf
  - lem-distribution-pairing-with-smooth-parameter-families
  - thm-bezout-identity
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), §5.3, Lemma 5.3 and its proof"
      url: "https://arxiv.org/pdf/math/0408100v3"
    - title: "Stephen D. Miller and Wilfried Schmid, Distributions and Analytic Continuation of Dirichlet Series, §§2–3 and §7"
      url: "https://arxiv.org/pdf/math/0403030v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Assume Countable Choice. Let $\tau$ be a cuspidal full-level GL3 automorphic distribution, with the abelian Fourier coefficients $c_{r,s}$ and non-abelian Fourier distributions $\sigma_{n,k},\rho_{n,k}$ from its Heisenberg expansion. For every nonzero integer $q$, define the periodic distributions
$$C_q(x)=\sum_{r\in\mathbb Z}c_{r,q}e(rx),\qquad D_q(y)=\sum_{s\in\mathbb Z}c_{q,s}e(sy).$$
Then every $C_q$, every $D_q$, and every $\sigma_{n,k}$ and $\rho_{n,k}$ has a canonical extension across $\infty$ and vanishes to infinite order at every rational point of $\mathbb R\cup\{\infty\}$.

## Statement references

[Miller and Schmid, *Automorphic Distributions, L-functions, and Voronoi Summation for GL(3)*, §5.3, Lemma 5.3](https://arxiv.org/pdf/math/0408100v3)

[Miller and Schmid, *Distributions and Analytic Continuation of Dirichlet Series*, §§2–3 and §7](https://arxiv.org/pdf/math/0403030v1)


## Facts & Assumptions

**Given:** The stated cuspidal datum and [[def-countable-choice|Countable Choice]]. Every principal-series embedding used below is the map supplied in [[def-full-level-gl3-automorphic-distribution]].

[F1] [[thm-gl3-heisenberg-fourier-expansion]] gives the two strong expansions and their finite Fourier relation.

[F2] [[lem-gl3-unipotent-character-descent-and-rank-one-boundary-model]] gives natural rank-one extensions and global torus projections. [[thm-gl3-embedded-sl2-fourier-coefficient-relations]] gives their global matrix relations, polynomial coefficient growth, both global cuspidal zero averages and the outer-involution transport. Write $C_q=A_q$, $D_q=B_q$ in that notation.

[F3] [[lem-gl3-periodic-zero-mean-distribution-canonical-at-infinity]] gives canonical infinity extensions of individual periodic zero-mean distributions.

[F4] [[thm-gl3-fourier-transform-preserves-infinite-order]] transfers origin flatness to canonical infinity extension. [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]] gives the double transform as reflection. [[lem-gl3-flat-distribution-power-multipliers-and-tempered-reciprocals]] preserves infinite flatness under the fixed frame power factors.

[F5] [[lem-gl3-uniform-flat-families-and-compact-averaging]] supplies polynomially controlled uniform periodic and Fourier extensions, uniform translated families, strongly convergent Fourier sums along a hypersurface, compact averaging and supported-flat uniqueness.

[F6] [[lem-gl3-boundary-flag-geometry-and-normal-order-nilpotence]] supplies the explicit open flag sets $O,U$, boundary hypersurfaces $S,T$, codimension-two set $K$, and both nilpotent periodic/zero-average vanishing criteria.

[F7] [[thm-distributions-form-a-sheaf]] glues equal local sections. [[lem-distribution-pairing-with-smooth-parameter-families]] permits the compact torus integrals and their strong distribution limits.

[F8] [[thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials]] gives the exact distributional Fourier integrals of polynomials, in particular $\int_{\mathbb R}e(-nvt)dt=|n|^{-1}\delta_0(v)$ for $n\ne0$. [[thm-finite-fourier-inversion]] makes the finite character matrix on $\mathbb Z/|n|\mathbb Z$ injective. [[thm-bezout-identity]] supplies integer inverses for each coprime rational representation.

## Proof

**Given:** The stated data.

1.1 The global zero averages in [F2] imply $c_{0,q}=c_{q,0}=0$. Thus every $C_q,D_q$ is periodic with zero mean and has its scalar canonical infinity extension by [F3]. Multiplying its reciprocal by the fixed rank-one frame power gives an infinitely flat extension as a rank-one vector by [F4]. Compare this with its natural rank-one extension from [F2]. For $C_q$ the natural vector is fixed by integral upper translation, and its average under the real upper translations over $[0,1]$ is zero: in the global projections this is $p_{x,0}p_{y,q}p_{z,0}\tau=p_{y,q}p_{x,0}p_{z,0}\tau=0$. The commutation holds because the two unipotent groups commute modulo the center, on whose zero mode it is trivial. The canonical vector has the same two properties: integral translation preserves its flatness and agrees on the finite chart, so uniqueness identifies it; its compact average is flat by [F5] and zero on the finite chart by zero mean, so supported-flat uniqueness makes that average zero globally. Their difference is supported at infinity and satisfies the rank-one vanishing criterion in [F6], hence is zero. The identical argument with the two root groups exchanged applies to $D_q$. Therefore the natural extensions of both periodic families are their infinitely flat canonical extensions. Moreover their infinity flatness is uniform with polynomial bounds in $q$, by the polynomial bound for $c_{r,s}$ in [F2], the periodic primitive assertion of [F5], and the fixed frame multiplier assertion of [F4], [F5]. [F1, F2, F3, F4, F5, F6, F7, algebra]

2.1 The global matrix relations [F2] now show that $\sigma_{cq,aq}$ and $\rho_{cq,aq}$ vanish to infinite order at zero: reciprocal change of variable carries the established infinity flatness of $C_q,D_q$ to zero, and their sign/power multipliers preserve it by [F4]. Every pair $(n,k)$ with $n\ne0$ occurs here: choose $q=\gcd(|n|,k)>0$, $c=n/q$, $a=k/q$; for $k=0$ take $q=|n|$, $c=\operatorname{sgn}n$, $a=0$. The finite Fourier relation [F1] also gives [F1, F2, F4, F8, step 1.1, algebra]
$$\widehat\sigma_{n,j}(x)=\frac1{|n|}\sum_{k\bmod n}e(-kj/n)\rho_{n,k}(x/n).$$
Thus every $\widehat\sigma_{n,j}$ is infinitely flat at zero. Applying [F4] and double Fourier reflection shows that every $\sigma_{n,j}$ has a canonical infinitely flat infinity extension. Applying [F4] first to $\sigma$ and then the finite Fourier relation gives the same conclusion for $\rho$. These canonical extensions have not yet been identified with their natural extensions at infinity. [F1, F2, F4, F8, step 1.1, algebra]

3.1 Work on $O=H_1S_1P/P=N\cup S$ from [F6]. The global central projection $\tau_n=p_{z,n}\tau$ has a Fourier expansion in $y,z$ on both base charts of this product orbit, with its natural coefficient vectors from [F2]. This is a genuine global expansion: on a compact base chart, finite distribution order bounds the torus coefficients by one fixed derivative seminorm times a polynomial in their frequency; smooth tests have arbitrarily rapid Fourier decay in that seminorm. Hence their pairings sum absolutely uniformly on bounded test sets and reconstruct the section. For $n=0$, the coefficients are the natural $C_q$ of step 1.1, with $C_0=0$; their uniform infinity flatness and [F5] show that $\tau_0$ is infinitely flat along $S$. For fixed $n\ne0$, use the canonical $\sigma_{n,k}^{\mathrm{can}}$ from step 2.1 to form [F1, F2, F4, F5, F6, F7, step 1.1, step 2.1, algebra]
$$\tau_n^{\mathrm{can}}(x,y,z)=\sum_{k\bmod n}\sum_{l\equiv k\ (n)}e(nz+ly)\psi(n(-l/n))\sigma_{n,k}^{\mathrm{can}}(x).$$
This is a strongly convergent section infinitely flat along $S$: the Fourier transforms of the finite coefficient family are flat at zero by step 2.1, so their integer translated families are uniformly flat at infinity by [F5]; fixed fractional translations and the fixed frame powers preserve the same bounds. The Fourier-sum assertion of [F5] applies. It agrees with $\tau_n$ on $N$, so their difference is supported on $S$ and has the same global Fourier expansion with coefficients $\Delta_{n,k}:=\sigma_{n,k}^{\mathrm{nat}}-\sigma_{n,k}^{\mathrm{can}}$, each supported at infinity. [F1, F2, F4, F5, F6, F7, step 1.1, step 2.1, algebra]

4.1 Fix $a,b,c,\bar a,q$ with $q\ne0$, $c\ne0$, $a\bar a-bc=1$, put $n=cq$ and use $\gamma,h_t$ from [F6]. Set $R_0=p_{x,q}p_{z,0}\tau$ and $R=\pi(\gamma)R_0$. Torus conjugation on $H_2$ gives the exact global identity $R=p_{x,aq}p_{z,cq}\tau$. On $O$ split it as [F2, F5, F6, F7, step 3.1, algebra]
$$R=F_O+B_O,\qquad F_O=p_{x,aq}\tau_n^{\mathrm{can}},\qquad B_O=p_{x,aq}(\tau_n-\tau_n^{\mathrm{can}}).$$
The first term is infinitely flat along $S$ by compact averaging in [F5], since upper $x$ translation preserves that hypersurface, and the second is supported on $S$. Also $R_0$ is flat along $S$, because $\tau_0$ is so by step 3.1 and the same averaging applies. Hence $R$ is flat along $\gamma S$ on $\gamma O$. On $O\cap\gamma O$, $B_O$ is both supported on and flat along $S=\gamma S$ there, so [F5] makes it zero. We can therefore glue $F_O$ on $O$ to $R$ on $\gamma O$, obtaining a section $F$ on $U$ flat along all of $T$; put $B=R-F$. By [F6], $B$ is supported on $K=T\setminus\gamma S$. [F2, F5, F6, F7, step 3.1, algebra]

5.1 The section $R_0$ is invariant under $n_y(1)$ and is annihilated by its compact upper-$y$ average: its two projections commute on the zero central mode, and the remaining $y,z$ zero average is the global cuspidal zero average of [F2]. Thus $R$ is fixed by $h_1$ and annihilated by $\int_0^1\pi(h_t)dt$. The decomposition $R=F+B$ into an infinitely flat section along $T$ and a section supported on $T$ is unique by [F5]. Since $h_t$ preserves $U,T$ by [F6], and its compact average preserves flatness by [F5], uniqueness makes both $F$ and $B$ inherit those same two properties. Finally $R=p_{x,aq}p_{z,n}\tau$ has central character $e(-ns)$ under $n_z(s)$. Both coordinate patches in the gluing are preserved by this central translation; $F_O$ has the same character from its explicit series. Hence $B$ is periodic in $z$, since $n$ is an integer. The codimension-two vanishing criterion [F6] applies and yields $B=0$. [F2, F5, F6, F7, step 3.1, step 4.1, algebra]

6.1 This vanishing forces every $\Delta_{n,k}$ to be zero. Indeed its explicit expression on $O$, with $v=y-a/c$, is [F1, F2, F6, F7, F8, step 3.1, step 4.1, step 5.1, algebra]
$$B=e(nz)\sum_{k\bmod n}e(ka/c)\int_{\mathbb R}e(-nvt)\psi(n(t))\Delta_{n,k}\,dt.$$
To derive it, apply $p_{x,aq}$ to the difference series of step 3.1. Its integrand before unfolding is $e(aqs+n(z-sy)+ly)\psi(n(s-l/n))\Delta_{n,k}$ for $0\le s\le1$, $l\equiv k\pmod n$. Set $t=s-l/n$ and sum over $l=k+nr$; the resulting intervals tile $\mathbb R$, and $e(la/c)=e(ka/c)$ because $na/c=aq\in\mathbb Z$. Each $\Delta$ is a finite point jet, and the upper-unipotent action is polynomial in $t$ and lowers its jet order by [F6]. Thus the unfolded integral is rigorously a finite polynomial Fourier distribution, defined by [F8]; against a compact smooth $v$ test its Fourier transform decays faster than that polynomial, justifying the unfolding. Let $M$ be the largest nonzero infinity-jet order among the finitely many $\Delta_{n,k}$. On its top quotient the translation acts identically, so $B=0$ implies
$$\sum_{k\bmod n}e(ka/c)\bigl(\Delta_{n,k}\bigr)_{M}=0,$$
after the nonzero factor $|n|^{-1}\delta_0(v)$ in [F8] is removed. For fixed $n$, the fractions $a/c$ with $n=cq$ range over every $j/n$ modulo integers: use $q=\gcd(|n|,j)$, $c=n/q$, $a=j/q$, including $a=0,c=\pm1$ for $j=0$. Finite Fourier inversion therefore makes every top coefficient zero, contradicting the choice of $M$ unless all $\Delta_{n,k}=0$. The negative sign of $n$ only reverses the finite characters and does not change their invertibility. [F1, F2, F6, F7, F8, step 3.1, step 4.1, step 5.1, algebra]

7.1 The argument for $\sigma$ used only the supplied principal-series model, $\Gamma$ invariance and its two global cuspidal zero averages. All are preserved by the outer involution in [F2]. Apply that same argument to the transformed datum. Its $\sigma'_{-n,-k}$ are exactly the original $\rho_{n,k}$, with their compatible natural rank-one extensions, so every natural $\rho$ infinity extension is canonical as well. Finally the global rational matrices in [F2] carry these infinity points to all rational points of $\mathbb {RP}^1$. For instance the pole of $M$ is $\bar a/c$; varying coprime $a,c$ and its inverse represents every rational. Therefore every $C_q$ and $D_q$ is flat at every rational point. Inverting the same global matrix relations shows the same for all $\sigma,\rho$, because rational fractional-linear maps permute $\mathbb {RP}^1(\mathbb Q)$ and smooth local bundle maps preserve flatness; the fixed frame powers at infinity are legitimate by [F4]. Their infinity extensions were already constructed and now identified with the natural ones. This proves every assertion of the original full-scope lemma. [F2, F4, F5, F6, step 1.1, step 2.1, step 6.1, algebra] ∎
