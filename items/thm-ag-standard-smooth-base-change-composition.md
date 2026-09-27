---
id: "thm-ag-standard-smooth-base-change-composition"
kind: "theorem"
title: "Base change and composition of standard smooth presentations"
status: draft
origin: "pipeline"
deps: ["def-ag-standard-smooth-algebra", "lem-ag-base-change-of-standard-smooth-presentations", "lem-ag-polynomial-quotient-differentials", "thm-coproduct-property-of-tensor-products-of-commutative-algebras", "thm-localisation-of-modules-is-tensor-product", "cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction", "thm-right-exactness-of-tensor-products", "thm-universal-property-of-localisation", "def-multiplicative-subset-and-localisation", "prop-iterated-localisation"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.137.6 (tag 00T7) and 10.137.8 (tag 00T9)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §26.2.2 and the Jacobian-block argument of §26.2.4, pp.690–693"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $R\to S$ be a homomorphism of commutative rings and let $R\to R'$ be an
arbitrary ring homomorphism. Write standard smooth presentations
([[def-ag-standard-smooth-algebra]]) as
$$S\cong\bigl(R[x_1,\dots,x_n]/(f_1,\dots,f_c)\bigr)_g,\qquad T\cong\bigl(S[y_1,\dots,y_m]/(f''_1,\dots,f''_d)\bigr)_{g''},$$
of relative dimensions $n-c$ and $m-d$, with leading Jacobian minors $h$ and
$h''$ mapping to units.

1. **Base change.** $R'\otimes_RS$ is a standard smooth $R'$-algebra with the
   same parameters $n,c$, relative dimension $n-c$, and with the image of $h$ a
   unit. If moreover $R\to S$ is standard smooth at a prime
   $\mathfrak q\in\operatorname{Spec}S$, then $R'\to R'\otimes_RS$ is standard
   smooth at every prime of $R'\otimes_RS$ lying over $\mathfrak q$;
   consequently locally standard smooth maps are stable under arbitrary base
   change of the base ring.
2. **Composition.** $T$ carries a standard smooth $R$-presentation with $n+m$
   variables, $c+d$ equations and relative dimension $(n-c)+(m-d)$; thus the
   relative dimensions of these displayed presentations add. If $R\to S$ is
   standard smooth at $\mathfrak q$ and $S\to T$ is standard smooth at
   $\mathfrak n\in\operatorname{Spec}T$ with $\mathfrak n\cap S=\mathfrak q$,
   then $R\to T$ is standard smooth at $\mathfrak n$; consequently a composite
   of locally standard smooth maps is locally standard smooth.

No hypothesis is placed on $R\to R'$ or on $R\to S$, no regularity theorem is
used, and no form of the Axiom of Choice is used: all statements are formal
consequences of the displayed polynomial presentations. The relative dimension
of a presentation is the integer $n-c$; its identification with the dimension
of a nonempty fibre is a separate matter, proved under the Axiom of Choice
elsewhere on this page and used nowhere below.

## Facts & Assumptions

**Given:** A homomorphism $R\to S$ with a standard smooth presentation of relative dimension $n-c$ and leading minor $h$ a unit, an arbitrary ring homomorphism $R\to R'$, and an $S$-algebra $T$ with a standard smooth $S$-presentation of relative dimension $m-d$ and leading minor $h''$ a unit (with localisation denominator $g''$).

[F1] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation of an $R$-algebra $S$ consists of $n\ge c\ge0$, $f_1,\dots,f_c\in R[x_1,\dots,x_n]$ and $g\in R[x_1,\dots,x_n]$ with $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ such that some $c\times c$ minor of the Jacobian matrix has image a unit of $S$; $n-c$ is the relative dimension and the invertible minor may be assumed to be the leading one in the first $c$ columns. For a finitely presented $R$-algebra $S$, the map $R\to S$ is standard smooth at $\mathfrak q$ when $S_u$ has a standard smooth presentation over $R$ for some $u\notin\mathfrak q$, and locally standard smooth when this holds at every prime.

[F2] [[lem-ag-base-change-of-standard-smooth-presentations]]: for any ring map $R\to R'$ and a standard smooth presentation $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ with minor $h$ a unit, there is a unique $R'$-algebra isomorphism $R'\otimes_RS\to(R'[x_1,\dots,x_n]/(f'_1,\dots,f'_c))_{g'}$ sending $a\otimes\overline F/g^N$ to $a\overline{F'}/(g')^N$, and the target is standard smooth over $R'$ with the same $n,c$ and relative dimension, the image $h'$ of $h$ again a unit.

[F3] [[lem-ag-polynomial-quotient-differentials]]: for $P=A[x_1,\dots,x_n]$ the partial derivatives $\partial_i$ are computed on the monomial basis by $\partial_i(x^a)=a_ix^{a-e_i}$ and extended $A$-linearly, so that $\partial_i$ is $A$-linear and is zero on polynomials not involving $x_i$; $\mathrm df=\sum_i\partial_if\,\mathrm dx_i$, and the Jacobian matrix $(\partial_if_j)$ governs the cokernel presentation of $\Omega_{P/I/A}$.

[F4] [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]], [[thm-localisation-of-modules-is-tensor-product]], [[cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction]]: for a ring homomorphism $R\to S$ there is an $S$-algebra isomorphism $S\otimes_RR[x]\cong S[x]$; for a multiplicative set $\Sigma$ of an $R$-algebra $A$ the localisation $\Sigma^{-1}M$ of an $A$-module is $(\Sigma^{-1}A)\otimes_AM$, so $A_g\otimes_AA[y]\cong(A[y])_g$; and the iterated polynomial ring $R[x_1]\cdots[x_n]$ is canonically $R[x_1,\dots,x_n]$.

[F5] [[thm-right-exactness-of-tensor-products]]: tensoring an exact sequence $A'\to B'\to C'\to0$ with a module preserves exactness; in particular for an ideal $I\subseteq B$ one has $(B/I)\otimes_BC\cong C/IC$, giving $(R[x]/(f_1,\dots,f_c))[y]\cong R[x,y]/(f_1,\dots,f_c)R[x,y]$.

[F6] [[thm-universal-property-of-localisation]], [[def-multiplicative-subset-and-localisation]]: a unital homomorphism carrying a multiplicative set into the units factors uniquely through the localisation, and in $A_u$ the element $u$ is a unit; localisation is functorial for ring maps.

[F7] [[prop-iterated-localisation]]: for multiplicative sets $\Sigma,\Upsilon$ of a commutative ring $A$, the iterated localisation $(\Sigma^{-1}A)_{\Upsilon}$ is the localisation of $A$ at the multiplicative set generated by $\Sigma\cup\Upsilon$; in particular localising successively at $g$ and at $H$ is localising at $gH$, and an element which is a unit remains a unit.



## Proof

1.1 Notation. Fix a standard smooth presentation $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ with leading $c\times c$ minor $h$ a unit of $S$ [F1], put $I:=(f_1,\dots,f_c)\subseteq R[x_1,\dots,x_n]$ and $A:=R[x_1,\dots,x_n]/I$, so that $S=A_g$. Fix also a standard smooth $S$-presentation $T\cong(S[y_1,\dots,y_m]/(f''_1,\dots,f''_d))_{g''}$ with leading $d\times d$ minor $h''$ a unit of $T$ [F1]. Finally fix a ring map $R\to R'$. [F1, given]

2.1 Base change of presentations. By [F2] applied to the presentation of step 1.1 and the ring map $R\to R'$ there is an $R'$-algebra isomorphism $R'\otimes_RS\cong(R'[x_1,\dots,x_n]/(f'_1,\dots,f'_c))_{g'}$, where $f'_j,g'$ are the images of $f_j,g$; the target is a standard smooth $R'$-presentation with the same $n,c$ and relative dimension $n-c$, and the image $h'$ of $h$ is a unit. This is the first assertion of clause 1. [F2, step 1.1]

2.2 The polynomial presentation of $S[y_1,\dots,y_m]$. The coefficient extension $A[y_1,\dots,y_m]\cong R[x_1,\dots,x_n,y_1,\dots,y_m]/I\,R[x_1,\dots,x_n,y_1,\dots,y_m]$ holds by [F5], since $A=R[x]/I$ and $R[x_1,\dots,x_n][y_1,\dots,y_m]=R[x_1,\dots,x_n,y_1,\dots,y_m]$ by [F4]; combining it with $A_g[y_1,\dots,y_m]\cong(A[y_1,\dots,y_m])_g$ from [F4] and with $S=A_g$ gives $$S[y_1,\dots,y_m]\cong\bigl(R[x_1,\dots,x_n,y_1,\dots,y_m]/(f_1,\dots,f_c)\bigr)_g .$$ We use this isomorphism to read the presentation of $T$ in the polynomial ring over $R$. [F4, F5, step 1.1]

3.1 Base change at a prime. Finite presentation is preserved by base change: tensoring $R[z_1,\dots,z_a]/(r_1,\dots,r_b)$ with $R'$ gives $R'[z_1,\dots,z_a]/(r'_1,\dots,r'_b)$ by [F4, F5], where the primes denote coefficient images. Suppose $R\to S$ is standard smooth at $\mathfrak q\in\operatorname{Spec}S$, witnessed by an element $u\notin\mathfrak q$ with $S_u$ standard smooth over $R$ [F1]; by [F2] the base change $R'\otimes_RS_u$ is standard smooth over $R'$. Let $Q\subseteq R'\otimes_RS$ be a prime with $Q\cap S=\mathfrak q$, i.e. lying over $\mathfrak q$; then $u\notin Q$, since $u\in Q$ would give $u\in Q\cap S=\mathfrak q$. Hence $Q$ lies in the principal open $D(u)$ of $\operatorname{Spec}(R'\otimes_RS)$, and the localisation $(R'\otimes_RS)_{u}$ — which is $R'\otimes_RS_u$ by [F4] — is standard smooth over $R'$ [F6]. Therefore $R'\to R'\otimes_RS$ is standard smooth at $Q$; as $Q$ was an arbitrary prime over $\mathfrak q$, this gives the pointwise form of clause 1, and taking the witnessing chart at every prime of $S$ gives stability of local standard smoothness under base change. [F1, F2, F4, F6, step 2.1]

3.2 Clearing denominators and the composite presentation. By step 2.2 the $S$-presentation of $T$ is a presentation in the ring $(R[x,y]/(f_1,\dots,f_c))_g$, with $y=(y_1,\dots,y_m)$; write $f''_k=\sum_\alpha \overline{a_{k\alpha}}y^\alpha$ and $g''=\sum_\beta\overline{c_\beta}y^\beta$ with coefficients in $S=A_g$, and choose representatives $a_{k\alpha}=g^{-N_{k\alpha}}b_{k\alpha}$ and $c_\beta=g^{-M_\beta}d_\beta$ with $b_{k\alpha},d_\beta\in R[x_1,\dots,x_n]$ and $N_{k\alpha},M_\beta\ge0$. Put $N:=\max(\{0\}\cup\{N_{k\alpha}\})$, $M:=\max(\{0\}\cup\{M_\beta\})$ (so empty families give $0$) and define $$F_k:=\sum_\alpha b_{k\alpha}g^{N-N_{k\alpha}}y^\alpha\in R[x,y],\qquad H:=\sum_\beta d_\beta g^{M-M_\beta}y^\beta\in R[x,y].$$ Multiplying the displayed identities by $g^N$ and $g^M$ shows $F_k=g^Nf''_k$ and $H=g^Mg''$ in $S[y]$. Since $g$ is a unit of $S[y]_{gH}$, the ideals $(F_1,\dots,F_d)$ and $(f''_1,\dots,f''_d)$ coincide there, and $H$ is a unit multiple of $g''$; by [F7] localising at $g$ and then at $g''$ is localising at $gH$. Hence $$T=\bigl(S[y]/(f''_1,\dots,f''_d)\bigr)_{g''}\cong\bigl(R[x_1,\dots,x_n,y_1,\dots,y_m]/(f_1,\dots,f_c,F_1,\dots,F_d)\bigr)_{gH},$$ the composite presentation of $T$ over $R$. [F1, F4, F6, F7, step 2.2]

4.1 The Jacobian minor of the composite. In the ring $S[y]$, the sum formula and coefficient linearity of [F3] give $\partial F_k/\partial y_l=\sum_\alpha b_{k\alpha}g^{N-N_{k\alpha}}\partial(y^\alpha)/\partial y_l=g^N\partial f''_k/\partial y_l$, because the coefficients $g^{N-N_{k\alpha}}b_{k\alpha}$ represent $g^N g^{-N_{k\alpha}}b_{k\alpha}=g^N\overline{a_{k\alpha}}$ and $\partial/\partial y_l$ is $S$-linear on $S[y]$. Hence the leading $d\times d$ block $(\partial F_k/\partial y_l)_{1\le k,l\le d}$ has determinant $g^{Nd}h''$, a unit of $T$ because $g$ and $h''$ are units. Moreover $\partial f_j/\partial y_l=0$ for all $j,l$, since $f_j\in R[x_1,\dots,x_n]$ does not involve the $y$'s [F3]. Therefore the $(c+d)\times(c+d)$ minor of the Jacobian matrix of $(f_1,\dots,f_c,F_1,\dots,F_d)$ on the columns $x_1,\dots,x_c$ and $y_1,\dots,y_d$ is block triangular with diagonal blocks $\bigl(\partial f_j/\partial x_i\bigr)_{1\le i,j\le c}$ and $\bigl(\partial F_k/\partial y_l\bigr)_{1\le k,l\le d}$, so its determinant is $$h\cdot g^{Nd}h'',$$ which is a unit of $T$ because $h$ maps to a unit of $S$ and hence of $T$, and $g$ and $h''$ are units of $T$. [F1, F3, step 3.2, algebra]

5.1 The composite is standard smooth. By step 3.2 the algebra $T$ is presented over $R$ as $(R[x_1,\dots,x_n,y_1,\dots,y_m]/(f_1,\dots,f_c,F_1,\dots,F_d))_{gH}$ with $n+m$ variables and $c+d$ equations, and by step 4.1 the displayed $(c+d)\times(c+d)$ minor of the Jacobian matrix is a unit of $T$; moreover the invertible minor may be assumed leading after permuting variables, so this is a standard smooth $R$-presentation [F1]. Its relative dimension is $(n+m)-(c+d)=(n-c)+(m-d)$, the sum of the relative dimensions of the two given presentations. This proves the first assertion of clause 2. [F1, step 3.2, step 4.1]

6.1 Composition at a point. Finite presentation is preserved by composition: from $S=R[z_1,\dots,z_a]/(r_1,\dots,r_b)$ and $T=S[w_1,\dots,w_e]/(s_1,\dots,s_l)$, lift the finitely many coefficients of the $s_i$ to $R[z]$; then $T=R[z,w]/(r_1,\dots,r_b,\widetilde s_1,\dots,\widetilde s_l)$ by [F4, F5]. Thus the finite-presentation prerequisite in [F1] holds for the composite. Suppose $R\to S$ is standard smooth at $\mathfrak q$ and $S\to T$ is standard smooth at $\mathfrak n$ with $\mathfrak n\cap S=\mathfrak q$. Choose $u\notin\mathfrak q$ with $S_u$ standard smooth over $R$ and $v\notin\mathfrak n$ with $T_v$ standard smooth over $S$ [F1]. Since $u\notin\mathfrak q=\mathfrak n\cap S$, both $u$ and $v$ lie outside $\mathfrak n$, so $uv\notin\mathfrak n$. Base change of the standard smooth $S$-presentation of $T_v$ along $S\to S_u$ gives the standard smooth $S_u$-algebra $S_u\otimes_ST_v\cong(T_v)_u=T_{uv}$ by step 2.1 and [F4, F7]. Applying step 5.1 to $S_u$ over $R$ and $T_{uv}$ over $S_u$ exhibits $T_{uv}$ as standard smooth over $R$; since $uv\notin\mathfrak n$, this witnesses that $R\to T$ is standard smooth at $\mathfrak n$ [F1]. As $\mathfrak n$ was arbitrary, a composite of locally standard smooth maps is locally standard smooth, which completes clause 2. [F1, F4, F7, step 2.1, step 5.1] ∎
