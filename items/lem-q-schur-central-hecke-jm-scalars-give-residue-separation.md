---
id: lem-q-schur-central-hecke-jm-scalars-give-residue-separation
kind: lemma
title: "Central Hecke Jucys–Murphy scalars separate q-Schur residue contents"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-type-a-q-schur-algebra-and-weyl-modules,
       lem-dj-bridge-murphy-cellular-basis-and-cell-form,
       thm-hecke-jucys-murphy-action-is-dominance-triangular,
       thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple,
       thm-wedderburn-artin-theorem,
       def-quantum-characteristic-of-an-invertible-hecke-parameter]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 13
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, prepublication manuscript; Chapter 3, printed pp. 26–29, and Chapter 4, printed pp. 40–42, for the Murphy action and semistandard cell maps. The local proof uses an injective Weyl-cell map, not singular-parameter surjectivity onto all Hom spaces."
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
---

## Statement

Let $R$ be a commutative unital ring, $q\in R^\times$, $H=H_{R,q}(S_n)$, $M=\bigoplus_{\alpha\in\Lambda(d,n)}M^\alpha$ and $S=\operatorname{End}_H(M)$. For a symmetric polynomial $f$ over $R$, put $z_f=f(L_1,\ldots,L_n)$ for the additive Hecke Jucys–Murphy elements. Right multiplication $\rho_{z_f}:m\mapsto mz_f$ is a central element of $S$. On the right Weyl cell $W^\lambda$ it acts by

$$a_\lambda(f)=f\bigl([c(A)]_q:A\in[\lambda]\bigr),\qquad c(r,s)=s-r.$$

The identity holds over every $R$ and unit $q$, without division by a quantum integer or a Gram determinant. In particular, if $R=F$ is a field of finite quantum characteristic $e\ge2$ and $L^\mu$ is a constituent of $W^\lambda$, then $\lambda$ and $\mu$ have the same multiset of residues $c(A)\bmod e$. Neither partition is required to be restricted or to survive the Hecke corner. This proves a necessary content-separation condition, not an assertion that equal content is sufficient for common-block membership.

## Facts & Assumptions

**Given:** The ring, parameter, ranks, right permutation modules and Schur algebra of the Statement.

[F1] The integral Murphy cells $C_{\mathrm M}(\lambda)$ have free standard basis $m_t$, dominance ideals $I^{\rhd\lambda}$, a symmetric cell form $G_\lambda$, and cell-layer multiplication $X\cdot Y=XG_\lambda Y$. The standard trace satisfies $\tau(T_u^*T_v)=\delta_{uv}q^{\ell(u)}$ ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F2] The additive $L_k$ commute, symmetric polynomial evaluations are central, and their matrices in every Murphy cell have diagonal entries $[c_t(k)]_q$ and strictly dominant off-diagonal terms ([[thm-hecke-jucys-murphy-action-is-dominance-triangular]]).

[F3] The actual Schur maps are $\varphi_{ST}(m_\nu h)=m_{ST}h$, supported on the indicated source and target types, with $m_{ST}$ the unweighted standard-tableau fibre sum. They form the cellular basis and $W^\lambda$ has basis $w_T=\varphi_{T^\lambda T}+S^{\rhd\lambda}$, where $T^\lambda$ has shape and type $\lambda$ and its refinement is $t^\lambda$. All Weyl forms have canonical norm one, hence their simple form quotients $L^\lambda$ are nonzero over every field ([[def-type-a-q-schur-algebra-and-weyl-modules]]).

[F4] A finite-dimensional algebra has nilpotent Jacobson radical; its semisimple quotient is a product of matrix algebras over division rings. Ideals and ideal quotients of a semisimple algebra are semisimple and have no nonzero nilpotent two-sided ideal ([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]], [[thm-wedderburn-artin-theorem]]).

[F5] Finite quantum characteristic $e$ is the characteristic of $F$ when $q=1$, and the order of $q$ when $q\ne1$. The extended quantum integers are $[c]_q=(q^c-1)/(q-1)$ when $q\ne1$, and $[c]_1=c$ ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]).

## Proof

**Proof technique:** direct.

1.1 Work first over $A=\mathbb Z[u,u^{-1}]$ with fraction field $K=\mathbb Q(u)$. The regular trace pairing $(a,b)\mapsto\operatorname{Tr}(\ell_{ab})$ has entries in $A$ in the standard Hecke basis. At $u=1$ its matrix is $n!\,\delta_{v,w^{-1}}$, so its determinant is nonzero and it is nondegenerate over $K$. If $a$ belongs to the Jacobson radical, $ab$ is nilpotent for every $b$ by [F4]; its left multiplication is nilpotent and has trace zero. Nondegeneracy forces the radical to vanish. Thus $H_K$ is semisimple. Its shape-$\lambda$ cell layer has the multiplication $XG_\lambda Y$ of [F1]. If $G_\lambda$ were singular, the nonzero subspace $\{X:G_\lambda X=0\}$ would be a two-sided ideal with square zero, contradicting [F4]. Hence $G_\lambda$ is invertible and $X\mapsto G_\lambda X$ identifies this layer with a full matrix algebra over $K$. [F1, F4, algebra]

1.2 Construct an injective right $S$-module map $j:W^\lambda\to\operatorname{Hom}_H(M,C_{\mathrm M}(\lambda))$. Project the output of $\varphi_{T^\lambda T}:M\to M^\lambda$ through $\pi:M^\lambda\to C_{\mathrm M}(\lambda)=M^\lambda/(M^\lambda\cap I^{\rhd\lambda})$. For $T$ of type $\nu$, the resulting map is zero on the other summands and sends $m_\nu$ to $m_T=\sum_{t:\nu(t)=T}m_t$. Higher Schur maps with output type $\lambda$ have Hecke values of strictly dominant shape, so their output is killed by $\pi$. Thus this assignment respects the cell quotient and multiplication by any $s\in S$ becomes composition on the right: $j(ws)=j(w)\circ s$. For each fixed type the sets of standard $t$ with $\nu(t)=T$ are disjoint. Each is nonempty: standardize equal entries of a semistandard tableau in increasing column order; equal entries cannot share a column, row order is retained, and different entries occupy disjoint consecutive label blocks. Hence their sums $m_T$ are independent in the free Murphy cell basis, over every $R$. This proves injectivity, including zero type entries. No surjectivity onto all specialized Hom spaces is asserted. [F1, F3, algebra, construct]

2.1 For an integral symmetric polynomial $f$, $z_f$ is central by [F2]. Its action on the generic cell layer is a bimodule endomorphism of that full matrix algebra, hence scalar: its value at the identity commutes with every matrix and the rest follows by multiplication. Accordingly its matrix on $C_{\mathrm M}(\lambda)_K$ is scalar. The triangular matrices in [F2] give its diagonal as $f([c_t(1)]_u,\ldots,[c_t(n)]_u)$, equal to $a_\lambda(f)$ for every $t$ because $f$ is symmetric and the node multiset is fixed. Thus $z_f$ acts exactly by this scalar. Both sides have matrices over $A$, and injection into $K$ proves the identity before specialization. Every symmetric polynomial over an arbitrary $R$ is an $R$-linear combination of integral monomial symmetric polynomials: coefficients are constant on each monomial orbit. Apply the integral identities to these monomial polynomials and specialize $u\mapsto q$. Therefore every $z_f$ acts by $a_\lambda(f)$ on the actual Murphy cell over $R$, including singular parameters. [F1, F2, step 1.1, algebra]

3.1 For central $z_f\in H$, right multiplication preserves every $M^\alpha$ and is $H$-linear. Every $H$-linear endomorphism $s$ of $M$ satisfies $s(mz_f)=s(m)z_f$, so $\rho_{z_f}$ is central in $S$. For $w\in W^\lambda$ and $m\in M$, step 1.2 and $H$-linearity give $$j(w\rho_{z_f})(m)=j(w)(mz_f)=j(w)(m)z_f=a_\lambda(f)j(w)(m),$$ the last equality by step 2.1. Injectivity gives $w\rho_{z_f}=a_\lambda(f)w$, proving the full ring-level assertion. If $M=0$ all cell assertions are empty. At rank zero the empty cell is $R$ with the empty polynomial evaluation, so the same conclusion holds. [F2, F3, step 2.1, step 1.2, algebra]

4.1 Suppose now that $R=F$ and $L^\mu$ is a constituent of $W^\lambda$. Step 3.1 gives scalar $a_\lambda(f)$ on this constituent. Since $L^\mu$ is the nonzero quotient of $W^\mu$ by [F3], its scalar is also $a_\mu(f)$; hence they agree for every symmetric $f$. Taking all elementary symmetric polynomials gives $$\prod_{A\in[\lambda]}(X-[c(A)]_q)=\prod_{B\in[\mu]}(X-[c(B)]_q).$$ By [F5], if $q=1$ the distinct $e$ residues are the distinct prime-field values $[c]_1$; if $q\ne1$, $[a]_q=[b]_q$ is equivalent to $q^a=q^b$, hence to $a\equiv b\pmod e$. Unique factorization of these monic products into distinct field-linear factors therefore gives equality of every residue multiplicity, also when the field characteristic divides a multiplicity. There is no restriction on either label's Hecke-corner image, and no splitting extension, Gram division or choice principle enters the argument. [F3, F5, step 3.1, algebra] ∎

## Remarks

The map in step 1.2 is intentionally only an injection. At $H_2$ with $q=-1$, the sign Murphy cell of shape $(1,1)$ and the permutation module of type $(2)$ both have $T_1$ acting by $-1$, so their Hom space has dimension one, while the corresponding Weyl weight has Kostka number zero. An unrestricted singular-parameter full-Hom identification would therefore add a nonexistent Weyl weight. The central scalar proof needs none of that surjectivity.
