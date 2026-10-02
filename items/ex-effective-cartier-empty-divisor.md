---
id: ex-effective-cartier-empty-divisor
kind: example
title: "The unit equation defines the empty effective Cartier divisor"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-cartier-divisor
  - def-effective-cartier-divisor
  - def-invertible-sheaf-of-cartier-divisor
  - def-sheaf-total-quotient-rings
  - thm-effective-cartier-divisor-closed-immersion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, Definition 31.14.1 and Definition 31.15.1"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
---

## Example

On every scheme $X$ the constant meromorphic function $1$ is a global unit of
$\mathcal K_X$, and its class in
$\mathcal K_X^{\times}/\mathcal O_X^{\times}$ is the zero element $0$ of the
Cartier group $\operatorname{CaDiv}(X)$. This **empty divisor** is effective:
the single chart $X$ with the single equation $f=1$ is a local-equation
representation by a regular section, since multiplication by $1$ is the
identity. Its associated closed subscheme is empty, and its associated
invertible sheaf is $\mathcal O_X$ itself:
$$\mathcal O_X(\varnothing):=\mathcal O_X(0)=\mathcal O_X,\qquad Z_0=\varnothing .$$
Here $\varnothing$ in the notation $\mathcal O_X(\varnothing)$ denotes the zero
element of $\operatorname{CaDiv}(X)$, whose vanishing locus is empty; it is
the only effective Cartier divisor on the empty scheme.

## Facts & Assumptions

**Given:** An arbitrary scheme $X$, the constant meromorphic function
$1\in\Gamma(X,\mathcal K_X^{\times})$, and the Cartier divisor
$0\in\operatorname{CaDiv}(X)$ that is its class.

[F1] The group law of $\operatorname{CaDiv}(X)$ is induced by the quotient
sheaf $\mathcal K_X^{\times}/\mathcal O_X^{\times}$, so the zero element $0$ is
the class of the constant equation $1$, which is a global meromorphic unit;
a Cartier divisor is principal exactly when it admits a representation by a
single global equation ([[def-cartier-divisor]],
[[def-sheaf-total-quotient-rings]]).

[F2] A Cartier divisor $D$ is effective if it has a local-equation
representation $(U_i,f_i)$ with $f_i\in\mathcal O_X(U_i)$ whose germs are
regular sections, that is, multiplication by each germ $(f_i)_x$ is
injective; a unit equation, in particular $f_i=1$, gives the zero Cartier
divisor, and the empty scheme has only this effective divisor
([[def-effective-cartier-divisor]]).

[F3] An effective Cartier divisor $D$ determines a closed subscheme
$Z_D\hookrightarrow X$ with ideal sheaf $I_D|_{U_i}=f_i\mathcal O_{U_i}$ for
every local-equation datum; the construction depends only on $D$
([[thm-effective-cartier-divisor-closed-immersion]]).

[F4] The invertible sheaf associated to a Cartier divisor $D$ with local
equations $f_i$ satisfies $\mathcal O_X(D)|_{U_i}=f_i^{-1}\mathcal O_{U_i}$,
and for the zero divisor the equation is $1$, so $\mathcal O_X(0)=\mathcal O_X$;
on the empty scheme the formula gives the unique module sheaf, which is
locally free of rank one vacuously
([[def-invertible-sheaf-of-cartier-divisor]]).

## Verification

1.1 The zero Cartier divisor is the class of the unit equation: the global section $1\in\Gamma(X,\mathcal K_X^{\times})$ maps to the identity element $0$ of the quotient group $\Gamma(X,\mathcal K_X^{\times}/\mathcal O_X^{\times})=\operatorname{CaDiv}(X)$, and the single chart $X$ with equation $1$ represents it. [F1]

1.2 The zero divisor is effective: taking the trivial cover $\{X\}$ and the equation $f=1\in\mathcal O_X(X)$, multiplication by the germ $1_x$ is the identity map on $\mathcal O_{X,x}$ for every $x\in X$, hence injective; by [F2] the zero Cartier divisor is an effective Cartier divisor. [F2]

1.3 **The empty scheme.** If $X=\varnothing$, then $\mathcal K_X=\mathcal O_X=0$, the quotient sheaf is the zero sheaf, and $\operatorname{CaDiv}(\varnothing)=0$: the zero divisor is the only Cartier divisor and, by [F2], the only effective Cartier divisor. Its vanishing subscheme is the empty scheme and its associated sheaf is the unique $\mathcal O_{\varnothing}$-module sheaf, which is $\mathcal O_\varnothing$; the claims about its vanishing subscheme and its associated sheaf formulated below hold there vacuously. [F2, F4]

2.1 Its closed subscheme is empty: by [F3] the ideal sheaf is $I_0|_X=1\cdot\mathcal O_X=\mathcal O_X$, the unit ideal; on an affine chart $U=\operatorname{Spec}A$ the quotient $A/A=0$ is the zero ring, whose spectrum is empty, and the glued vanishing subscheme is therefore empty, $Z_0=\varnothing$. [F2, F3, step 1.2]

2.2 Its invertible sheaf is the structure sheaf: by [F4] the associated sheaf satisfies $\mathcal O_X(0)|_{U_i}=f_i^{-1}\mathcal O_{U_i}=1^{-1}\mathcal O_X=\mathcal O_X$ on each chart of the trivial cover, and these identifications agree on overlaps; hence $\mathcal O_X(0)\cong\mathcal O_X$, the isomorphism being multiplication by the unit $1$. [F4, step 1.1]

3.1 **Conclusion.** On every scheme $X$ the unit equation defines the empty effective Cartier divisor $0=\varnothing$, whose vanishing subscheme is empty and whose associated invertible sheaf is $\mathcal O_X$; thus $\mathcal O_X(\varnothing)=\mathcal O_X$ in the notation of the Example. The only input is the unit equation $1$, so no choice principle, no Noetherian or finiteness hypothesis, and no separatedness or reducedness is used. [step 1.2, step 1.3, step 2.1, step 2.2] ∎

The example shows that effectiveness of the zero divisor is not a vacuous or
convention-dependent statement: the equation $1$ is regular, the ideal sheaf
it generates is the unit ideal, and the scheme it cuts out is empty. The
convention $\mathcal O_X(\varnothing)=\mathcal O_X$ is consistent with the
sign rule of [[def-invertible-sheaf-of-cartier-divisor]], under which a
regular equation becomes a zero-scheme of an effective divisor; for the unit
equation the zero scheme is empty and no poles are introduced.
