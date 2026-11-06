---
id: ex-cft-sl2-level-one-affine-voa
kind: example
title: The level-one affine sl2 current relation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: mathematics
deps:
  - def-cft-simple-affine-voa
  - def-untwisted-affine-central-extension
  - def-degree-derivation-and-full-untwisted-affine-algebra
  - lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root
  - lem-cft-positive-integer-affine-highest-weight-is-integrable
  - thm-finite-dimensional-representations-of-sl-two
  - lem-cft-affine-current-fields-have-uniform-nilpotence
  - thm-sugawara-modes-satisfy-virasoro
  - lem-sugawara-modes-act-on-currents
  - def-cft-affine-fundamental-weight-lambda-zero
  - def-dual-coxeter-number-for-normalized-form
  - def-casimir-operator-relative-to-an-invariant-form
dependency_roles:
  def-cft-simple-affine-voa: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
  def-degree-derivation-and-full-untwisted-affine-algebra: mathematical-premise
  lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root: mathematical-premise
  lem-cft-positive-integer-affine-highest-weight-is-integrable: mathematical-premise
  thm-finite-dimensional-representations-of-sl-two: mathematical-premise
  lem-cft-affine-current-fields-have-uniform-nilpotence: mathematical-premise
  thm-sugawara-modes-satisfy-virasoro: mathematical-premise
  lem-sugawara-modes-act-on-currents: mathematical-premise
  def-cft-affine-fundamental-weight-lambda-zero: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
  def-casimir-operator-relative-to-an-invariant-form: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Chongying Dong, Haisheng Li, and Geoffrey Mason, Regularity of Rational Vertex Operator Algebras
      url: https://arxiv.org/pdf/q-alg/9508018v1
      locator: "§3, Lemma 3.6 and Theorem 3.7, printed pp. 6–8; positive-integral-level affine current relations."
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: "§3.1 and §11.1, printed pp. 65–68 and 217–218; affine VOA and positive-level module conventions."
---

## Statement

Let $e=\left(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\right)$, $f=\left(\begin{smallmatrix}0&0\\1&0\end{smallmatrix}\right)$, and $h=\operatorname{diag}(1,-1)$ in $\mathfrak{sl}_2(\mathbb C)$, with $[e,f]=h$, $[h,e]=2e$, $[h,f]=-2f$, and normalized invariant form $B(e,f)=1$, $B(h,h)=2$. The long root has square $2$, $h^\vee=2$, and at level $\ell=1$ the simple affine VOA has Sugawara central charge $c_{\mathrm{Vir}}=1$. Its vacuum satisfies $e_{-1}^2\mathbf1=0$; on every weak module $M$, the normal product $:J^e_M(z)J^e_M(z):$ vanishes and every mode $e_n$ is locally nilpotent. If $v\in M$ and $e_jv=0$ for all $j>k$, then $e_k^2v=0$. In contrast, $e_{-2}^2\mathbf1\ne0$ in the level-one VOA.

## Facts & Assumptions

**Given:** The displayed $\mathfrak{sl}_2$ basis and form, level $\ell=1$, and the Sugawara conformal structure.

[F1] [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]] gives $\alpha_0=\delta-\alpha$ and $h_0=c-h$ in rank one; [[def-cft-affine-fundamental-weight-lambda-zero]] defines $\Lambda_0$ and its values on $c$, $d$, and $h$.

[F2] [[lem-cft-positive-integer-affine-highest-weight-is-integrable]] makes the vacuum module integrable, so its $\alpha_0$-root string is finite-dimensional. [[thm-finite-dimensional-representations-of-sl-two]] then says a highest vector of $h_0$-weight $1$ is killed by the square of its lowering generator.

[F3] [[def-untwisted-affine-central-extension]] gives $[e_m,e_n]=[e,e]_{m+n}+m\delta_{m,-n}B(e,e)c=0$.

[F4] [[lem-cft-affine-current-fields-have-uniform-nilpotence]] gives the normal-product identity on weak modules and its mode-extraction argument, with $N_1=2$ since both finite roots have square $2$; its coefficient argument proves the bound at a truncation index and local nilpotence of arbitrary modes.

[F5] [[thm-sugawara-modes-satisfy-virasoro]] gives $c=\ell\dim(\mathfrak{sl}_2)/(\ell+h^\vee)$, where [[def-dual-coxeter-number-for-normalized-form]] defines $h^\vee=\gamma_B/2$ by the adjoint scalar $\Omega_B=\gamma_B I$, and [[def-casimir-operator-relative-to-an-invariant-form]] defines $\Omega_B$ as the sum of products of adjoint operators of dual basis vectors, and [[lem-sugawara-modes-act-on-currents]] gives $[L_0,e_n]=-n e_n$.

## Proof

1.1 The affine simple-root triple at node $0$ has raising operator $e_0=f_1$, lowering operator $f_0=e_{-1}$ and Cartan element $h_0=c-h$. On the vacuum, the raising operator vanishes and $(c-h)\mathbf1=\mathbf1$, since $c$ acts by level $1$ and $h\mathbf1=0$. Integrability in [F2] makes this a finite-dimensional $\mathfrak{sl}_2$ string, so its highest-weight-one vector is killed by $f_0^2$, giving $e_{-1}^2\mathbf1=0$. The finite root has $(\alpha,\alpha)=2$, so $m_\alpha=2\ell/(\alpha,\alpha)=1$ and $N_1=2$. The displayed invariant form gives $B(e,e)=B(f,f)=B(e,h)=B(f,h)=0$ by invariance, so the $B$-dual basis to $(e,f,h)$ is $(f,e,h/2)$. The adjoint Casimir is therefore $\Omega_B=\operatorname{ad}(e)\operatorname{ad}(f)+\operatorname{ad}(f)\operatorname{ad}(e)+\tfrac12\operatorname{ad}(h)^2$. On $e$ it acts by $[e,[f,e]]+[f,[e,e]]+\tfrac12[h,[h,e]]=2e+0+2e=4e$. By the normalized convention $h^\vee=\gamma_B/2$ where $\Omega_B=\gamma_B I$ in the adjoint representation, $h^\vee=2$. Since $\dim\mathfrak{sl}_2=3$, [F5] gives $c_{\mathrm{Vir}}=3/(1+2)=1$. [F1, F2, F5, given, algebra]

1.2 The root current modes commute by [F3], so its normal product equals its coefficientwise product. The vertex-algebra iterate identity sends the zero state $e_{-1}^2\mathbf1$ to the field $:J^e(z)J^e(z):=0$, and the module iterate identity gives the same zero product on every weak module. For $v\in M$, choose $k$ such that $e_nv=0$ for all $n>k$ by lower truncation. In the coefficient of $z^{-2(k+1)}$ in $J^e_M(z)^2v$, any term with an index above $k$ vanishes after commuting that mode to the right; if both indices are at most $k$ and sum to $2k$, both equal $k$. The coefficient is therefore $e_k^2v$, and the zero product forces it to vanish. The bound applies to this truncation index $k$; [F4] proves local nilpotence for arbitrary fixed modes. This is an algebraic current-mode identity; it asserts no Hilbert-space positivity or analytic CFT construction. [F3, F4, given, algebra]

2.1 To check the limit of the coefficient conclusion, on the level-one VOA put $E=f_2$, $F=e_{-2}$ and $H=2c-h_0$, where $h_0$ here denotes the horizontal zero mode of $h$. The affine bracket gives $[E,F]=H$, $[H,E]=2E$ and $[H,F]=-2F$. The vacuum obeys $E\mathbf1=0$ and $H\mathbf1=2\mathbf1$, so $EF\mathbf1=2\mathbf1$ and $EF^2\mathbf1=(HF+FH)\mathbf1=2F\mathbf1$. Hence $E^2F^2\mathbf1=4\mathbf1\ne0$, and therefore $e_{-2}^2\mathbf1\ne0$. Thus the cutoff condition in step 1.2 is essential. [F1, F3, given, algebra] ∎
