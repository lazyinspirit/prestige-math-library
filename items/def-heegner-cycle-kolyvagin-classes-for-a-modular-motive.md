---
id: def-heegner-cycle-kolyvagin-classes-for-a-modular-motive
kind: definition
title: "Heegner-Cycle Kolyvagin Classes for a Higher-Weight Modular Motive"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-normalized-cuspidal-eigenform-over-gl2
  - def-full-level-modular-curve-moduli-problem-and-universal-elliptic-curve
  - thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues
  - thm-ring-class-reciprocity-on-cm-singular-moduli
  - thm-singular-modulus-generates-the-ring-class-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§4.1–4.3, printed pp. 67–71: Heegner cycles, Kolyvagin integers, and derivative classes."
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, arXiv preprint v3"
      url: "https://arxiv.org/pdf/2211.04907"
      locator: "§§3.6–3.8: Kolyvagin primes, higher-weight Heegner cycles, and derived classes; used as a cross-check of definitions, not as a substitute for the 2026 published text."
verification: {}
---

## Definition

Let $f$ be a normalized newform of even weight $k\ge4$, trivial character, and level $N\ge3$, let $F$ be its coefficient field, and let $p$ be a prime with a chosen place $\mathfrak p$ of $F$ above $p$. Let $K$ be an imaginary quadratic field such that every prime dividing $Np$ splits in $K$, write $D_K=|\operatorname{disc}(K)|>0$ for its absolute discriminant, and let $c$ be prime to $NpD_K$. Write $X=\widetilde E_N^{k-2}$ for the canonical desingularization of the $(k-2)$-fold fiber product of the universal generalized elliptic curve over the compact modular curve of full level $N$. Choose a Hecke and sign idempotent correspondence $e_f$ projecting to the $f$-isotypic summand, a $G_{\mathbb Q}$-stable $\mathcal O_{F,\mathfrak p}$-lattice $T_p(f)$ in the Deligne representation, and the finite local-condition subgroup $H^1_f$ used by the $p$-adic étale Abel–Jacobi map. Let $K_c$ be the ring class field of conductor $c$.

Choose an $N$-cyclic ideal $\mathfrak N\subset\mathcal O_K$ and a CM point $x_c\in X_0(N)(K_c)$ represented by the isogeny $\mathbb C/\mathcal O_c\to\mathbb C/(\mathcal O_c\cap\mathfrak N)^{-1}$. After choosing a lift $\widetilde x_c$ to full level $N$, write $E_c$ for its elliptic curve and $\xi_c=\sqrt{-c^2D_K}$ with positive imaginary part. For $a\in\mathcal O_c$, let $\Gamma_{c,a}$ be the graph of multiplication by $a$ on $E_c\times E_c$, and set
$$Z_k(\widetilde x_c)=\Gamma_{c,\xi_c}-(E_c\times\{0\})-(\{0\}\times E_c).$$
The geometric Heegner cycle is the $e_f$-projection of the pushforward to $X$ of the external product of $(k-2)/2$ copies of $Z_k(\widetilde x_c)$; its arithmetic image $y_{c,p}$ is defined by the specified $p$-adic étale Abel–Jacobi map into $H^1_f(K_c,T_p(f))$. Here $\operatorname{CH}^{k/2}_0(X/K_c)$ denotes codimension-$k/2$ cycles with zero $p$-adic étale cycle class modulo rational equivalence, and the Abel–Jacobi map and its image are part of the admissible geometric input.

Normalize the valuation $v_p$ on the coefficient field by $v_p(p)=1$. A rational prime $\ell$ is a Kolyvagin prime when $\ell\nmid Np$, $\ell$ is inert in $K$, and $\min\{v_p(\ell+1),v_p(a_\ell(f))\}>0$. Let $\mathcal N(f,p,K)$ be the squarefree products of these primes, including $1$, and put $M(1)=\infty$ and $M(n)=\min_{\ell\mid n}\min\{v_p(\ell+1),v_p(a_\ell(f))\}$ for $n>1$. For $n\in\mathcal N(f,p,K)$, let $K_n$ be the ring class field of conductor $n$, put $G_n=\operatorname{Gal}(K_n/K)$ and $G_n^{\rm rel}=\operatorname{Gal}(K_n/K_1)$, choose representatives for $G_n/G_n^{\rm rel}$, and set $z_{n,p}=\sum_{\sigma}\sigma(D_ny_{n,p})$. Define $\mathcal P_p(K_n)$ as the image of the specified Abel–Jacobi map. For $1\le M\le M(n)$, let $d_M(f,n)$ be the image of $z_{n,p}\bmod p^M\mathcal P_p(K_n)$ under the specified injection
$$\mathcal P_p(K_n)/p^M\mathcal P_p(K_n)\hookrightarrow H^1(K_n,A_p[p^M])^{G_n},$$
where $V_p=T_p(f)\otimes_{\mathcal O_{F,\mathfrak p}}F_{\mathfrak p}$ and $A_p=V_p/T_p(f)$. When restriction gives the indicated isomorphism $H^1(K,A_p[p^M])\xrightarrow{\sim}H^1(K_n,A_p[p^M])^{G_n}$, define $c_M(f,n)$ as the preimage of $d_M(f,n)$. These are the higher-weight Heegner Kolyvagin classes; all geometric maps and restriction isomorphisms are required as data, and their existence is not asserted here.

## Definition references

[[def-normalized-cuspidal-eigenform-over-gl2]]

[[def-full-level-modular-curve-moduli-problem-and-universal-elliptic-curve]]

[[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[[thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues]]

[[thm-ring-class-reciprocity-on-cm-singular-moduli]]

[[thm-singular-modulus-generates-the-ring-class-field]]

[Longo–Vigni, *The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms*, §§4.1–4.3](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[Longo–Vigni, arXiv:2211.04907v3, §§3.6–3.8 (earlier version)](https://arxiv.org/pdf/2211.04907)

## Facts & Assumptions

**Given:** The modular form and Galois lattice; the imaginary quadratic field and split primes; ring class fields and CM points; the Kuga–Sato variety and projectors; the Heegner cycles; the Abel–Jacobi and cycle-to-cohomology maps; and the indicated restriction isomorphisms.

[F1] [[def-normalized-cuspidal-eigenform-over-gl2]]: $f$ has specified weight, level, coefficient field, and Hecke eigenvalues $a_\ell(f)$.

[F3] [[def-full-level-modular-curve-moduli-problem-and-universal-elliptic-curve]]: the full-level modular curve carries the universal generalized elliptic curve used in the fiber product.

[F2] [[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]: the chosen $p$-adic Galois representation is the one attached to $f$.


[A1] The smooth projective Kuga–Sato model, projector, integral Abel–Jacobi map, cycle injection, and restriction isomorphism are assumed inputs. Their constructions and local-condition verifications are not asserted in this definition.

## Verification

1.1 The full-level universal curve [F3], selected lift, and endomorphism graph determine a codimension-one cycle on $E_c\times E_c$. Taking its $(k-2)/2$-fold external product, pushing it to $X$, and applying the specified idempotent $e_f$ gives a codimension-$k/2$ cycle in the stated isotypic component. [given, F1, F3, A1, construct]

2.1 By the assumed Abel–Jacobi map the geometric cycle has image in the stated finite cohomology group. Each Kolyvagin derivative is a finite group-ring operation; the assumed injection modulo $p^M$ and restriction isomorphism therefore define $d_M(f,n)$ and $c_M(f,n)$ in their stated domains. [given, F2, A1, step 1.1, construct] ∎
