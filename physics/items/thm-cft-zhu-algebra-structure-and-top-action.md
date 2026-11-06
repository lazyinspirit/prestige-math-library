---
id: thm-cft-zhu-algebra-structure-and-top-action
kind: theorem
title: Zhu quotient algebra and admissible top-level action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - lem-cft-locality-to-jacobi-residue-calculus
  - lem-cft-zhu-zero-mode-identities-on-singular-vectors
  - def-cft-zhu-algebra
  - def-conformal-vertex-algebra
  - def-vertex-algebra-state-field
  - def-admissible-vertex-algebra-module
  - def-vertex-algebra-module
dependency_roles:
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
  lem-cft-zhu-zero-mode-identities-on-singular-vectors: mathematical-premise
  def-cft-zhu-algebra: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
      locator: "§§5.1–5.3, printed pp. 113–123; Zhu operations and top-level action."
    - title: "Chongying Dong, Haisheng Li, and Geoffrey Mason, Vertex operator algebras and associative algebras"
      url: "https://arxiv.org/pdf/q-alg/9612010"
      locator: "§§2–4; higher Zhu operations and admissible-module layers."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V=\bigoplus_{r\geq0}V_r$ be a conformal vertex algebra of CFT type in the state–field convention. For homogeneous $a,b\in V$, define $a\circ b=\operatorname{Res}_z(1+z)^{\mathrm{wt}(a)}z^{-2}Y(a,z)b$, $O(V)=\operatorname{span}_{\mathbb C}\{a\circ b\}$, and $a*b=\operatorname{Res}_z(1+z)^{\mathrm{wt}(a)}z^{-1}Y(a,z)b$. Extend $\circ$ and $*$ uniquely to bilinear maps $V\times V\to V$ over finite homogeneous decompositions. Then $O(V)$ is a two-sided ideal for $*$, the product descends to an associative unital product on $A(V)=V/O(V)$ with unit $[\mathbf1]$, and every admissible module $M=\bigoplus_{n\geq0}M(n)$ has an $A(V)$-module structure on $M(0)$ given on homogeneous $a$ by $[a]m=a^M_{(\mathrm{wt}(a)-1)}m$. No finite-dimensionality of $A(V)$ or $M(0)$ is asserted.

## Statement references

[[def-cft-zhu-algebra]]

## Facts & Assumptions

**Given:** V and the admissible module M in the unchanged Statement. All congruences below mean additive difference in the vector subspace O(V); no product on V/O(V) is assumed before ideal stability is proved.

[F1] [[def-cft-zhu-algebra]] supplies the finite circle/star mode sums and the vector-space quotient V/O(V).

[F2] [[def-conformal-vertex-algebra]] supplies the conformal grading and $T=L(-1)$.

[F3] [[def-admissible-vertex-algebra-module]] gives $a^M_{(j)}M(n)\subseteq M(n+r-j-1)$ for $a\in V_r$, with negative grades zero.

[F4] [[def-vertex-algebra-module]] supplies vacuum and module Jacobi.

[F5] The actual [[lem-cft-locality-to-jacobi-residue-calculus]] public interface states regular-module Jacobi for the fields on V, $Y(Ta,z)=\partial_zY(a,z)$, the state-product weight rule $\mathrm{wt}(a_{(p)}b)=r+s-p-1$, and the displayed coefficientwise iterate/residue identities on V and every left V-module. The CFT-type hypotheses here are precisely those of that interface.

[F6] [[lem-cft-zhu-zero-mode-identities-on-singular-vectors]] proves coefficientwise that zero modes preserve $\Omega(M)=\{v:a^M_{(n)}v=0\text{ for homogeneous }a,n\geq\mathrm{wt}(a)\}$, annihilate O(V) there, and obey $o_M(a*b)=o_M(a)o_M(b)$ there. It assumes neither an admissible grading nor finiteness or semisimplicity of M.

## Proof

1.1 For homogeneous $a\in V_r$ set $C_{m,n}(a,b)=\operatorname{Res}_z(1+z)^{r+n}z^{-m-2}Y(a,z)b$, $m\geq n\geq0$. We prove each lies in O(V). The case $C_{0,0}$ is its defining generator. Integration by parts with F5 gives $C_{m,0}(Ta,b)=(m+2)C_{m+1,0}(a,b)+(m+1-r)C_{m,0}(a,b)$: differentiate $(1+z)^{r+1}z^{-m-2}$ and expand its extra factor 1+z. Thus if all $C_{m,0}$ lie in O(V), the same is true at m+1, since m+2 is invertible in C and Ta has weight r+1 when nonzero. Induction gives the assertion for every m. Finally $C_{m,n}=\sum_{i=0}^n\binom ni C_{m-i,0}$ by expanding $(1+z)^n$, and $m-i\geq0$. This proves the full higher-residue relation with no ideal property assumed. [given, F1, F5, algebra]

1.2 For homogeneous $a\in V_r,b\in V_s$, put $D=T+L(0)$, a linear operator on V. Creation gives $Da=a\circ\mathbf1\in O(V)$ for every homogeneous a and hence $D(V)\subseteq O(V)$. The derivative property and integration by parts give $(Ta)*b=a\circ b-r(a*b)$ for $a\in V_r$, so $(Da)*b=a\circ b$ exactly. We also have the exact derivation identity $D(a*b)=(Da)*b+a*(Db)$. To verify it rather than assume it, expand $a*b=\sum_i\binom ri a_{(i-1)}b$. The L(0)-weight of its ith term is r+s-i, while translation of the same sum is $T(a*b)=a*Tb+a\circ b-r\operatorname{Res}_z(1+z)^{r-1}z^{-1}Y(a,z)b$. The elementary identity $(r-i)\binom ri=r\binom{r-1}{i}$ makes the remaining weight sum cancel that last residue and gives the asserted derivation formula; for $r=0$ the cancellation reads $0=0$. Finally vacuum and creation give $\mathbf1*a=a$ and $a*\mathbf1=a$ exactly, since only their constant power-series coefficients contribute to the star residue. [F1, F2, F5, algebra]

2.1 Let $a\in V_r,b\in V_s$ and c be homogeneous. Weight bookkeeping in F5 and the finite star sum give $$(a*b)*c=\operatorname{Res}_y\operatorname{Res}_t\frac{(1+y+t)^r(1+y)^s}{ty}Y(Y(a,t)b,y)c.$$ Apply F5's residue identity with $m=-1$ and $P(x,y)=(1+x)^r(1+y)^s/y$. Its first product expands $(x-y)^{-1}=\sum_{j\geq0}y^jx^{-j-1}$; the $j=0$ term is $a*(b*c)$. The reversed expansion is $(x-y)^{-1}=-\sum_{j\geq0}x^jy^{-j-1}$, and the minus in the residue identity therefore makes its contribution positive. Define $E_j=\operatorname{Res}_y(1+y)^s y^{j-1}Y(b,y)c$ and $F_j=\operatorname{Res}_x(1+x)^r x^jY(a,x)c$. Exact coefficient extraction yields $$(a*b)*c-a*(b*c)=\sum_{j\geq1}C_{j-1,0}(a,E_j)+\sum_{j\geq0}C_{j,0}(b,F_j).$$ These sums are finite: $E_j=\sum_{i=0}^s\binom si b_{(j+i-1)}c$ and $F_j=\sum_{i=0}^r\binom ri a_{(j+i)}c$ vanish for large j by truncation. Each summand lies in O(V) by step 1.1, even when $E_j,F_j$ are not homogeneous. Hence the associator is in O(V). Bilinearity extends this additive congruence to all inputs. [F1, F5, step 1.1, algebra]

3.1 Right ideal stability follows first, without multiplying an unproved congruence: $ (a\circ b)*c=((Da)*b)*c\equiv(Da)*(b*c)=a\circ(b*c)\in O(V)$, where the only congruence is the associator from step 2.1 applied to the actual inputs Da,b,c. Thus $O(V)*V\subseteq O(V)$. Next the exact derivation relation in step 1.2 gives $c*(Da)=D(c*a)-c\circ a\in O(V)$. Applying step 2.1 to c,Da,b yields $c*(a\circ b)=c*((Da)*b)\equiv(c*(Da))*b$, which is in O(V) by the right ideal stability just proved. Thus $V*O(V)\subseteq O(V)$ too. Linearity across circle generators proves both ideal assertions in the Statement. This order of proof avoids assuming either ideal assertion in order to prove the other. [F1, step 2.1, step 1.2, algebra]

4.1 Step 3.1 makes the product on V/O(V) well-defined on both representatives. The associator relation of step 2.1 descends to associativity, and step 1.2 gives its two-sided unit $[\mathbf1]$. These conclusions use only finite formal residue identities, not a citation to the algebra-structure theorem. [F1, step 2.1, step 1.2, step 3.1, algebra]

5.1 For $a\in V_r$ and $m\in M(0)$, F3 implies $a^M_{(n)}m=0$ whenever $n\geq r$, since its target grade is negative. Hence $M(0)\subseteq\Omega(M)$. F3 also gives $o_M(a)M(0)\subseteq M(0)$. F6 now supplies $o_M(O(V))M(0)=0$ and $o_M(a*b)m=o_M(a)o_M(b)m$, by its explicit circle/star iterate coefficient cancellations. Its vacuum identity makes the action unital. Thus $[a]\mapsto o_M(a)|_{M(0)}$ is the stated well-defined representation of the associative algebra from step 4.1. No dimension bound or semisimplicity condition is used. [F3, F4, F6, step 4.1, algebra] ∎
