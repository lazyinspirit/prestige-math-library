---
id: def-cyclotomic-p-adic-l-function-of-an-ordinary-newform
kind: definition
title: "Cyclotomic p-adic L-Function of an Ordinary Newform"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-normalized-cuspidal-eigenform-over-gl2
  - def-congruence-modular-form-with-nebentypus
  - def-hecke-operator-on-congruence-forms
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-gauss-sum-dirichlet-character
  - thm-dirichlet-twist-mellin-continuation-for-cusp-form
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Christopher Skinner and Eric Urban, The Iwasawa Main Conjectures for GL2"
      url: "https://www.math.columbia.edu/~urban/eurp/MC.pdf"
      locator: "§§3.3–3.6, especially Definitions 3.3.6, 3.4.4 and Theorem 3.6.4."
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
---

## Definition

Let $p$ be an odd prime, $N\ge1$ with $p\nmid N$, and $k\ge2$. Let $\chi$ be a Dirichlet character modulo $N$, let $\chi_{Np}$ be its inflation along $(\mathbb Z/Np\mathbb Z)^\times\to(\mathbb Z/N\mathbb Z)^\times$, let $L/\mathbb Q_p$ be finite, and let $g\in S_k(\Gamma_0(Np),\chi_{Np};L)$ be a normalized cuspidal Hecke eigenform that is $p$-ordinary, meaning that $U_pg=\alpha g$ for a unit $\alpha\in\mathcal O_L^\times$. Here $U_p$ denotes the normalized double-coset operator $T_p$ at level $Np$ (with character $\chi_{Np}$). In the Euler factor below, $\chi(p)$ denotes the value of the original character modulo $N$; it is not the zero-extended value $\chi_{Np}(p)=0$. Choose compatible embeddings of its coefficient field into $\mathbb C$ and $\overline{\mathbb Q}_p$, and choose periods $\Omega_g^\pm\in\mathbb C^\times$. Let $\mathbb Q_\infty$ be the cyclotomic $\mathbb Z_p$-extension, set $\Gamma=\operatorname{Gal}(\mathbb Q_\infty/\mathbb Q)$, identify it with $1+p\mathbb Z_p$ by reciprocity, choose the generator $\gamma$ corresponding to $1+p$, and put $\Lambda=\varprojlim_{r\ge1}\mathcal O_L[\Gamma/\Gamma^{p^r}]$. For a primitive $\mathcal O_L$-valued Dirichlet character $\psi$ of conductor $C$ prime to $p$, and an arithmetic character $\phi:\Gamma\to\overline{\mathbb Q}_p^\times$ satisfying $\phi(\gamma)=\zeta(1+p)^m$, where $\zeta$ has order $p^{t_\phi-1}$ for an integer $t_\phi\ge1$ and $m$ is an integer with $0\le m\le k-2$, let $\chi_\phi$ be the primitive Dirichlet character corresponding to $\zeta^{-1}$ under the fixed reciprocity convention. Let $\omega$ be the Teichmüller character modulo $p$ and $\bar\psi$ the complex-conjugate character. Set $t'_\phi=0$ if $t_\phi=1$ and $p-1\mid m$, and set $t'_\phi=t_\phi$ otherwise. Write $\tau_\phi=\psi\omega^{-m}\chi_\phi^{-1}$ as a Dirichlet character modulo $q_\phi=Cp^{t'_\phi}$. A cyclotomic $p$-adic $L$-function for $g$ and $\psi$ is a bounded measure $L_p(g,\psi)\in\Lambda$ whose arithmetic specializations satisfy
$$L_p(g,\psi)(\phi)=e_p(\phi)\frac{(p^{t'_\phi}C)^{m+1}m!\,L(g,\tau_\phi,m+1)}{(-2\pi i)^mG(\tau_\phi)\Omega_g^{\operatorname{sgn}((-1)^m\psi(-1))}},$$
where $L(g,\tau,s)$ is the entire continuation of $\sum_{n\ge1}a_n(g)\tau(n)n^{-s}$ and $G(\tau)$ is the Gauss sum modulo the stated character modulus, and
$$e_p(\phi)=\alpha^{-t_\phi}\left(1-\frac{\omega^{-m}\chi_\phi^{-1}\psi(p)\chi(p)p^{k-2-m}}{\alpha}\right)\left(1-\frac{\omega^m\chi_\phi\bar\psi(p)p^m}{\alpha}\right).$$
The periods, embeddings, reciprocity convention, and unit $U_p$-eigenvalue $\alpha$ are part of the data; existence and uniqueness of the measure are separate assertions.

## Definition references

[Christopher Skinner and Eric Urban, The Iwasawa Main Conjectures for GL2](https://www.math.columbia.edu/~urban/eurp/MC.pdf)

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

## Facts & Assumptions

**Given:** The fixed data of the Definition, including $g$, $\psi$, the periods, embeddings, reciprocity convention, $\alpha$, $\Gamma$, and $\gamma$. For uniqueness, suppose two elements $\mu,\nu\in\Lambda$ satisfy the displayed interpolation formula for these same data.

[F1] [[def-normalized-cuspidal-eigenform-over-gl2]]: a normalized eigenform has Fourier coefficients and a $T_p$ eigenvalue.

[F2] [[def-congruence-modular-form-with-nebentypus]]: use level $Np$ and the inflated character $\chi_{Np}$ in the modular transformation law. Reduction of units modulo $Np$ to units modulo $N$ is a group homomorphism, so composition with $\chi$ defines this character and preserves $\chi_{Np}(-1)=\chi(-1)$.

[F3] [[def-hecke-operator-on-congruence-forms]]: specialize its normalized $T_p$ double-coset definition to level $Np$ and character $\chi_{Np}$; $U_p$ is the notation used here for that operator at the level-dividing prime. The ordinary eigenrelation is supplied in the data, rather than deduced from this definition.

[F4] [[def-dirichlet-character-modulo-q]] and [[def-primitive-dirichlet-character-and-conductor]]: the twisting characters and primitive conductors are fixed.

[F5] [[def-gauss-sum-dirichlet-character]]: $G(\tau)$ is the additive Gauss sum with the stated modulus.

[F6] [[thm-dirichlet-twist-mellin-continuation-for-cusp-form]]: the twisted $L$-series has an entire continuation to the critical values in the interpolation formula.

## Proof

**Proof technique:** uniqueness from finite Fourier inversion; no existence assertion.

1.1 Put $\delta=\mu-\nu$. Since $k\ge2$, the interpolation range includes $m=0$. For every $r\ge1$ and every $p^r$-th root of unity $\zeta\in\overline{\mathbb Q}_p$, the character $\phi_\zeta(\gamma)=\zeta$ is an allowed arithmetic character: if its order is $p^a$, take $t_\phi=a+1$, including $a=0$ for the trivial character. Equality of the prescribed specializations gives $\delta(\phi_\zeta)=0$. Let $h_r$ be the image of $\gamma$ in $\Gamma/\Gamma^{p^r}$, a cyclic group of order $n=p^r$, and write the projection of $\delta$ as $\delta_r=\sum_{j=0}^{n-1}b_jh_r^j$ with $b_j\in\mathcal O_L$. Specialization through this quotient yields $\sum_{j=0}^{n-1}b_j\zeta^j=0$ for every $\zeta^n=1$. [given, construct, algebra]

2.1 For $0\le\ell<n$, multiply these equations by $\zeta^{-\ell}$ and sum over the $n$ roots in $\overline{\mathbb Q}_p$. The sum $\sum_{\zeta^n=1}\zeta^{j-\ell}$ is $n$ when $j=\ell$ and zero otherwise: on writing the roots as powers of a primitive $n$-th root, this is the finite geometric-sum identity. Hence $nb_\ell=0$ in $\overline{\mathbb Q}_p$ and $b_\ell=0$, since this field has characteristic zero and $\mathcal O_L$ embeds in it. Division by $n$ takes place in the field and requires no inverse of $p$ in $\mathcal O_L$. Thus $\delta_r=0$ for every $r$, so $\delta=0$ in the defining inverse limit. There is at most one measure satisfying the interpolation formula for the fixed data. [given, step 1.1, algebra] ∎

## Authoring status

The interpolation convention follows Skinner–Urban §3.4.4. The argument above proves uniqueness if the measure exists. The local modular-symbol construction, existence, and the required algebraicity and integrality for the chosen periods are not reconstructed here, so this carrier remains escalated.
