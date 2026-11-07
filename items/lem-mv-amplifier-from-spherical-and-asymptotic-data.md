---
id: lem-mv-amplifier-from-spherical-and-asymptotic-data
kind: lemma
title: "A Michel–Venkatesh amplifier from supplied spherical and asymptotic data"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-total-variation-of-a-signed-or-complex-measure
  - thm-total-variation-is-a-measure
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-integral-triangle-inequality
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michel–Venkatesh, The Subconvexity Problem for GL2, arXiv:0903.3591v2"
      url: "https://arxiv.org/pdf/0903.3591v2"
      locator: "§5.2.3, pp.98–99; §§4.3.3–4.3.7, pp.77–79. Conditional adaptation with explicit real polynomial and constants."
    - title: "Venkatesh, Sparse Equidistribution Problems, Period Bounds and Subconvexity"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf"
      locator: "§4.1, pp.1022–1025, especially (4.9)–(4.12); the construction here is adapted to unitary central characters."
---

## Statement

This is a conditional construction from the following supplied data. It does not assert that these data have been established for the automorphic representations in the subconvexity theorem.

Let $G=\mathrm{GL}_2(\mathbb A_{F,f})$ for a number field $F$. Measures supported in one local factor are embedded using the identity at every other place. All measures below are finite Borel measures; convolution is the pushforward of product measure by multiplication, and $\check\alpha$ is pushforward by inversion. Write $A_\alpha v=\int U(g)v\,d\alpha(g)$ for supplied actions satisfying $A_{\alpha*\beta}=A_\alpha A_\beta$. The vector $x\ne0$ belongs to one such complex module. The vector $\Phi$ belongs to another module $V$, with a subspace $\mathcal R$ preserved by compactly supported convolution. In the intended application $\mathcal R$ is the space of rapidly decreasing functions.

Fix $L\ge8$, $c>0$, a finite forbidden set $\mathcal B$ of finite places, a set $\mathcal P$ of places outside $\mathcal B$, and a further place $w\notin\mathcal B\cup\mathcal P$. Suppose
$$L\le q_v\le2L\ (v\in\mathcal P),\qquad |\mathcal P|\ge cL/\log L,\qquad q_w^8\le L.$$
Assume all the following local data, including their stated normalizations.

(a) At $v\in\mathcal P$ there are positive compactly supported spherical measures $H_{v,n}$ for $n=0,1,2,4$, with $H_{v,0}=e_v$ a probability measure, and a central probability measure $Z_v$. For $n>0$ their masses are $(1+q_v^{-1})q_v^{n/2}$. The two eigenvalues $a_{v,1},a_{v,2}$ on $x$ satisfy
$$a_{v,1}^{2}=a_{v,2}+(1+q_v^{-1})z_v,\qquad |z_v|=1.$$
Their radial products satisfy
$$H_{v,1}*\check H_{v,1}=(1+q_v^{-1})e_v+Z_v^{-1}*H_{v,2},$$
$$H_{v,2}*\check H_{v,2}=(1+q_v^{-1})e_v+(1-q_v^{-1})Z_v^{-1}*H_{v,2}+Z_v^{-2}*H_{v,4}.$$
Here $Z_v^{-j}$ means the $j$th convolution power of $\check Z_v$; central averaging is assumed to preserve each radial norm value below. In the intended normalization $H_{v,n}=q_v^{-n/2}1_{K_v\operatorname{diag}(\varpi_v^n,1)K_v}\,dg_v$, $\operatorname{vol}(K_v)=1$, and $Z_v$ is point mass at $\varpi_v I$.

(b) There are measurable functions $N,D:G\to[1,\infty)$, symmetric under inversion, with $N$ submultiplicative. On $\operatorname{supp}H_{v,n}$ one has $N\le q_v^n$ and $D=q_v^n$. The function $D$ is unchanged by central factors and is multiplicative on products supported at disjoint places. Also $D=1$ on $\operatorname{supp}e_v$. All the convolution kernels used below are measurable. These are hypotheses about the supplied norm, not a conclusion for an unspecified adelic embedding.

(c) At $w$ there is a positive compactly supported measure $T$ of mass $q_w+1$, with $N\le q_w$ on its support. For $0\le m\le4$ and nonzero complex numbers $b_1,\ldots,b_m$, counted with algebraic multiplicities, assume
$$|b_j|\ge q_w-1,\qquad \prod_{j=1}^m(A_T-b_j I)[\Phi]=0\quad\text{in }V/\mathcal R.$$
An empty product means that $\Phi\in\mathcal R$. Assume also $A_{\check T}x=t^-x$ with $|t^-|\le(q_w-1)/2$. All measures at $w$ commute with all measures at $\mathcal P$.

Then the recipe in the proof constructs a real signed compactly supported measure $\sigma$ with the following five properties. Its support has $N\le K=L^4$; it is the identity at all forbidden and archimedean factors; $A_{\check\sigma}\Phi\in\mathcal R$; its total variation has mass at most $K^2$ and satisfies, for every fixed $\gamma>1/2$,
$$\int_G D(u)^{-\gamma}\,d(|\sigma|*|\check\sigma|)(u)\le16^8\left(\frac{24\log L}{cL}+4L^{1-2\gamma}\right);$$
and $A_\sigma x=\lambda x$ with
$$|\lambda|\ge\frac1{512\sqrt2}.$$
In particular, put $\rho=\min(1/2,2\gamma-1)$ and $\eta=\rho/8$. For sufficiently large $L$, depending on $c,\gamma$, the moment is at most $K^{-\eta}$. The same measure works for each fixed $\gamma$; the threshold is allowed to depend on $\gamma$. If supplied data exist at $L=Q^\kappa$ for a fixed $\kappa>0$, then $K=Q^{4\kappa}$ and the eigenvalue bound implies the required $Q^{-\epsilon}$ lower bound for every $\epsilon>0$.

## Statement references

[Michel–Venkatesh, §§4.3.7 and 5.2.3](https://arxiv.org/pdf/0903.3591v2)

[Venkatesh, §4.1, pp.1022–1025](https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf)

## Facts & Assumptions

**Given:** Exactly the supplied local measures, module actions, eigenvalues, radial identities, norm properties, prime set and quotient-annihilation identity in the Statement. In particular (a)–(c) are hypotheses, not imported established theorems. No choice principle is assumed beyond finite selections.

[F1] [[def-total-variation-of-a-signed-or-complex-measure]] defines variation as the supremum of sums of absolute values over countable measurable partitions; [[thm-total-variation-is-a-measure]] proves that it is a positive measure.

[F2] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] supplies finite product measures and their rectangle formula. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] permits iterated integration for integrable measurable kernels. All measure kernels used here are bounded on supports of finite positive measures.

[F3] [[thm-integral-triangle-inequality]] bounds an integrable scalar integral by the integral of its absolute value.

## Proof

**Given:** The supplied data (a)–(c); put $q=q_w$. The identity measure in a convolution polynomial is point mass at the group identity.

1.1 For each $v\in\mathcal P$, at least one of $|a_{v,1}|,|a_{v,2}|$ is at least $1/2$: otherwise $|a_{v,1}^2-a_{v,2}|<3/4$, contradicting (a). Choose $n_v=1$ if $|a_{v,1}|\ge1/2$, and $n_v=2$ otherwise. Partition the nonzero complex plane into four half-open angular sectors centered at angles $j\pi/2$, $j=0,1,2,3$. Choose a sector containing the greatest number of $a_{v,n_v}$, resolving ties by the smallest $j$, and let $\mathcal S$ be its prime set. With $M=|\mathcal S|$, one has $M\ge|\mathcal P|/4\ge cL/(4\log L)>0$. Define the positive real measure $\sigma_0=M^{-1}\sum_{v\in\mathcal S}H_{v,n_v}$. Its eigenvalue $\lambda_0$ on $x$ satisfies $\operatorname{Re}(e^{-ij\pi/2}\lambda_0)\ge1/(2\sqrt2)$, hence $|\lambda_0|\ge1/(2\sqrt2)$. Its mass is at most $4L$, and $N\le4L^2$ on its support. This sector selection uses no complex weights. [given, construct, algebra]

1.2 Define a real polynomial and its measure by $p(X)=\prod_{j=1}^m\frac{(X-b_j)(X-\overline{b_j})}{|b_j|^2},\qquad \nu=p(T).$ Every factor has real coefficients. In the quotient module, the supplied annihilating polynomial divides $p$, including repeated roots, so $A_\nu\Phi\in\mathcal R$. The measure $\check\nu=p(\check T)$ acts on $x$ by $p(t^-)$. Each factor has modulus at least $(1-|t^-|/|b_j|)^2\ge1/4$; thus $|p(t^-)|\ge4^{-m}\ge1/256$. Pairing conjugate roots ensures reality even when the central character and the asymptotic eigenvalues are complex. No reality assumption on $t^-$ or $b_j$ was used. [given, construct, algebra]

2.1 For $\gamma>1/2$ and $n=2,4$, (a)–(b) give $\int D^{-\gamma}\,dH_{v,n}=(1+q_v^{-1})q_v^{n(1/2-\gamma)}\le2$. The radial identities therefore give $\int D^{-\gamma}\,d(H_{v,n_v}*\check H_{v,n_v})\le6$. If $v\ne v'$, disjoint-place multiplicativity and [F2] give $\int D^{-\gamma}\,d(H_{v,n_v}*\check H_{v',n_{v'}})\le4L^{1-2\gamma}.$ Indeed each factor is at most $2L^{1/2-\gamma}$ since $n_v\ge1$ and $q_v\ge L$. Expanding the finite sum for $\sigma_0*\check\sigma_0$ proves a moment bound of $6/M+4L^{1-2\gamma}$, which is at most $24\log L/(cL)+4L^{1-2\gamma}$. This separates same-prime returns from distinct-prime terms. [given, F2, step 1.1, algebra]

2.2 A positive measure dominating the variation of a factor of $p(T)$ is $\beta_j=\delta_1+\frac{2|\operatorname{Re} b_j|}{|b_j|^2}T+\frac1{|b_j|^2}T*T.$ Its mass is at most $(1+(q+1)/|b_j|)^2\le16$. To justify domination directly, write the factor as the same finite sum with its signed coefficients; for any countable partition the sum of its absolute values is bounded by the sum of the corresponding positive coefficients' measures, using [F1]. Expanding all products similarly gives $|\nu|\le\beta=\beta_1*\cdots*\beta_m$ with mass at most $16^m$. For $m=0$ use $\nu=\beta=\delta_1$. Its support and that of its inverse have $N\le q^{2m}\le q^8\le L$, by submultiplicativity. [given, F1, F2, F3, step 1.2, algebra]

3.1 Set $\sigma=\sigma_0*\check\nu$. It is real, compactly supported, and supported only at $\mathcal S\cup\{w\}$. Its support has $N\le4L^3\le L^4=K$. Commutativity between these places gives $A_\sigma x=\lambda_0p(t^-)x$ and $|\lambda_0p(t^-)|\ge1/(512\sqrt2)$. Also $\check\sigma=\nu*\check\sigma_0$, whence $A_{\check\sigma}\Phi=A_{\check\sigma_0}A_\nu\Phi\in\mathcal R$ by stability of $\mathcal R$. Thus it is the inverse measure that removes the growth of $\Phi$, as required. [given, step 1.1, step 1.2, step 2.2, algebra]

4.1 Put $\alpha=\sigma_0*\check\beta$. The same partition argument as in step 2.2 gives $|\sigma|\le\alpha$ and $|\check\sigma|\le\check\alpha$. Its mass is at most $4\cdot16^4L\le L^8=K^2$ for $L\ge8$. Hence $|\sigma|*|\check\sigma|\le\alpha*\check\alpha$. In this last convolution, the raw-prime product and the $w$-product have disjoint local supports. Since $D$ is multiplicative on such products and always at least one, the $w$-factor can only decrease $D^{-\gamma}$. Iterated integration [F2] bounds its contribution by the square of the mass of $\beta$, at most $16^8$. Multiplying the bound of step 2.1 by this constant proves the stated moment bound. In particular, no division by $D$ near a same-prime return and no cancellation of signed coefficients is presumed. [given, F1, F2, step 2.1, step 2.2, step 3.1, algebra]

5.1 For $L\ge8$, $\log L\le\sqrt L$, so the moment bound is at most $C_cL^{-\rho}$, where $C_c=16^8(24/c+4)$ and $\rho=\min(1/2,2\gamma-1)>0$. Taking $L\ge C_c^{2/\rho}$ makes this at most $L^{-\rho/2}=K^{-\rho/8}$. This is the promised $\eta$. At $L=Q^\kappa$, the same algebra gives $K=Q^{4\kappa}$, and the constant positive eigenvalue lower bound is at least $(512\sqrt2)^{-1}Q^{-\epsilon}$ for $Q\ge1$. These statements require the supplied data at that scale; they do not prove their existence. [given, step 3.1, step 4.1, algebra] ∎

## Remarks

The intended identification is $\Phi=\varphi_2E$, $x=\varphi_1$, $N=\|\cdot\|$, $D=\|\operatorname{Ad}(\cdot)\|$, with $\mathcal B$ containing the nonspherical places of both representations and the places where the additive character is ramified. The eigenvalue relation and radial identities, prime supply at the desired scale, suitable $w$, the quotient-annihilation identity with multiplicities, the bound on $t^-$, and the norm normalizations are still hypotheses here. This draft supplies their assembly and a real regularizer, not their general-number-field automorphic proofs. In particular it is not yet an unconditional supplier for the five conditions of Michel–Venkatesh §5.2.3.

The earlier Hilbert amplification draft is preserved separately and is not a dependency of this construction. After all inputs here are established, these measures supply its amplifier data in the convergent case, with its stated Countable Choice assumption. The general regularized period expansion remains separate. Neither a rapid convolution nor this draft makes the original product a Hilbert vector.
