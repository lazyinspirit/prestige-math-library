---
id: lem-cft-weak-affine-module-has-simple-ordinary-submodule
kind: lemma
title: Every nonzero weak positive-integral-level simple affine module contains a simple ordinary submodule
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: mathematics
deps:
  - def-cft-simple-affine-voa
  - def-vertex-algebra-module
  - def-ordinary-vertex-module
  - def-untwisted-affine-central-extension
  - thm-universal-affine-vertex-algebra
  - lem-cft-affine-current-fields-have-uniform-nilpotence
  - thm-finite-dimensional-representations-of-sl-two
  - thm-weyls-complete-reducibility-theorem
  - thm-complete-reducibility-of-integrable-kac-moody-o-modules
  - def-kac-moody-category-o
  - thm-universal-property-and-pbw-character-of-kac-moody-verma-modules
  - def-axiom-of-choice
  - def-sugawara-modes
  - lem-sugawara-modes-act-on-currents
  - thm-sugawara-modes-satisfy-virasoro
  - def-dual-coxeter-number-for-normalized-form
  - lem-finite-semisimple-pbw-and-highest-weight-construction
  - cor-schurs-lemma-for-irreducible-lie-algebra-representations
  - lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root
dependency_roles:
  def-cft-simple-affine-voa: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-ordinary-vertex-module: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
  thm-universal-affine-vertex-algebra: mathematical-premise
  lem-cft-affine-current-fields-have-uniform-nilpotence: mathematical-premise
  thm-finite-dimensional-representations-of-sl-two: mathematical-premise
  thm-weyls-complete-reducibility-theorem: mathematical-premise
  thm-complete-reducibility-of-integrable-kac-moody-o-modules: mathematical-premise
  def-kac-moody-category-o: mathematical-premise
  thm-universal-property-and-pbw-character-of-kac-moody-verma-modules: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-sugawara-modes: mathematical-premise
  lem-sugawara-modes-act-on-currents: mathematical-premise
  thm-sugawara-modes-satisfy-virasoro: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
  lem-finite-semisimple-pbw-and-highest-weight-construction: mathematical-premise
  cor-schurs-lemma-for-irreducible-lie-algebra-representations: mathematical-premise
  lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
      locator: "§3, Proposition 3.5, Lemma 3.6 and Theorem 3.7, printed pp. 6–8; the current-mode minimization and affine highest-vector steps were read in full."
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: "§3.1 and §11.1, especially Theorem 11.1 and the positive-level integrable affine module conventions, printed pp. 65–68 and 217–218."
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be finite-dimensional complex simple with its invariant form normalized by $(\alpha,\alpha)=2$ for long roots, let $\ell\in\mathbb Z_{>0}$, and let $L_\ell(\mathfrak g)$ be the simple affine VOA with its noncritical Sugawara conformal vector. Every nonzero weak $L_\ell(\mathfrak g)$-module contains a nonzero simple ordinary $L_\ell(\mathfrak g)$-submodule.

## Facts & Assumptions

**Given:** A nonzero weak module $M$ with the indicated simple affine VOA action.

[A1] Assume the Axiom of Choice, as required by [[thm-complete-reducibility-of-integrable-kac-moody-o-modules]] for set-indexed families of singular weight-space bases.

[F1] [[lem-cft-affine-current-fields-have-uniform-nilpotence]] supplies a finite basis $\mathcal B$ of $\mathfrak g$ such that, on every weak module, $a_n$ is locally nilpotent for every $a\in\mathcal B$ and $n\in\mathbb Z$. It also proves $a_k^{N_\ell}u=0$ whenever $a_ju=0$ for every $j>k$.

[F2] [[def-untwisted-affine-central-extension]] gives $[b_n,a_k]=[b,a]_{n+k}+n\ell B(b,a)\delta_{n,-k}I$ for current modes. The central term is zero when $n,k>0$.

[F3] [[thm-weyls-complete-reducibility-theorem]] applies to finite-dimensional $\mathfrak g$-modules, and [[thm-finite-dimensional-representations-of-sl-two]] identifies highest-weight strings and their highest vectors.

[F4] [[thm-complete-reducibility-of-integrable-kac-moody-o-modules]] assumes AC and a finite symmetrizable GCM, and decomposes an integrable module in category $\mathcal O$ into simple highest-weight modules. [[def-kac-moody-category-o]] and [[thm-universal-property-and-pbw-character-of-kac-moody-verma-modules]] give finite weight spaces and finite-cone support for a cyclic affine highest-weight module.

[F5] [[def-cft-simple-affine-voa]] realizes $L_\ell(\mathfrak g)$ as a current-generated quotient of the universal affine vertex algebra, and [[thm-universal-affine-vertex-algebra]] gives its current fields. [[def-vertex-algebra-module]] supplies lower truncation and module Jacobi. Lower truncation makes the current action restricted. [[def-sugawara-modes]] gives $2(\ell+h^\vee)L_0=\sum_a x_a(0)x^a(0)+2\sum_{n>0,a}x_a(-n)x^a(n)$ on restricted modules; [[lem-sugawara-modes-act-on-currents]] and [[thm-sugawara-modes-satisfy-virasoro]] give $[L_0,a_n]=-n a_n$ and the noncritical conformal action. The denominator is nonzero because $\ell>0$ and $h^\vee>0$.

[F6] [[def-ordinary-vertex-module]] requires semisimple $L_0$, finite-dimensional eigenspaces and real-part lower boundedness.

[F7] [[lem-finite-semisimple-pbw-and-highest-weight-construction]] supplies the finite-dimensional PBW ordering, and [[cor-schurs-lemma-for-irreducible-lie-algebra-representations]] makes any endomorphism of a finite-dimensional irreducible complex $\mathfrak g$-module scalar.

## Proof

1.1 For $u\in M\setminus\{0\}$, put $E(u)=\operatorname{span}\{a_nu:a\in\mathcal B,\ n>0\}$. Lower truncation and finiteness of $\mathcal B$ make $E(u)$ finite-dimensional. Choose nonzero $u$ minimizing $d(u)=\dim E(u)$. If $d(u)=0$, then $u$ is already killed by all positive currents. Otherwise let $k>0$ be the largest index for which $a_ku\ne0$ for some $a\in\mathcal B$, choose such $a$, and let $r\ge1$ be maximal with $a_k^ru\ne0$. Set $v=a_k^ru$. [F1, given, algebra]

2.1 In the remaining case $d(u)>0$, for every $b\in\mathcal B$ and $n>0$, expand $b_na_k^ru$ by repeatedly commuting $b_n$ past $a_k$. The term with no commutator is $a_k^rb_nu$. Every other term contains a current mode of index $n+jk>k$ for some $j\ge1$. Move that mode right past the remaining $a_k$ factors; each new commutator has still larger positive index, so induction on the number of remaining factors reduces every term to one with a mode of index $>k$ acting directly on $u$, which vanishes by maximality of $k$. Thus $b_nv=a_k^rb_nu$ and $E(v)\subseteq a_k^rE(u)$. But $a_ku\ne0$ lies in $E(u)$ and is killed by $a_k^r$, so $\dim E(v)<\dim E(u)$, contradicting minimality. Therefore the minimum is zero and $\Omega=\{w\in M:a_nw=0\text{ for every }a\in\mathfrak g,n>0\}$ is nonzero. [F1, F2, step 1.1, algebra]

3.1 The subspace $\Omega$ is stable under the zero-mode action of $\mathfrak g$: for $b\in\mathfrak g$, $a_n b_0w=b_0a_nw+[a_n,b_0]w=0$, since $[a_n,b_0]=[a,b]_n$ and $n>0$. For nonzero $w\in\Omega$, Order the finite basis $\mathcal B$ as $a_1,\ldots,a_s$. PBW [F7] spans $U(\mathfrak g)w$ by ordered zero-mode words. The powers of $a_s(0)$ on $w$ span a finite-dimensional space by local nilpotence [F1]. Recursively take powers of $a_i(0)$ on a finite spanning set for the suffix space: each string is finite, and their finite sum is finite-dimensional. After the $s$ basis elements this contains every ordered PBW word, so $U(\mathfrak g)w$ is finite-dimensional. It is a nonzero finite-dimensional $\mathfrak g$-module inside $\Omega$. By [F3], it contains a nonzero finite-dimensional irreducible summand; choose a highest vector $v$ there and put $H=U(\mathfrak g)v$. Then $H$ is that irreducible summand, and $v$ is killed by all positive loop modes and all positive finite-root spaces. [F1, F3, F7, step 2.1, algebra]

4.1 Positive loop modes kill $v$, so the quadratic Sugawara formula in [F5] shows that $L_0v$ is a linear combination of zero-mode products applied to $v$, hence belongs to $H$. The commutator $[L_0,x_0]=0$ then makes $H$ invariant under $L_0$; since $H$ is finite-dimensional irreducible, Schur's lemma [F7] gives $L_0|_H=hI$ for some $h\in\mathbb C$. On $R=U(\widehat{\mathfrak g})v$, define the affine derivation $d=-L_0$; [F5] gives $[d,x_n]=n x_n$, and $v$ is a weight vector for the full affine Cartan. By [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]], let $\theta$ be the highest finite root. For the untwisted affine matrix $\widehat A$, write $a_{ij}=\alpha_j(h_i)$, with node-zero data $\alpha_0=\delta-\theta$, $h_0=c-\theta^\vee$, and finite simple pairs $\alpha_i,h_i=\alpha_i^\vee$ [F5], with $\delta|_{\mathfrak h\oplus\mathbb Cc}=0$, $\delta(d)=1$, and $\alpha_i(c)=0$. Under the finite invariant-form identification of the Cartan dual with its root span, $\alpha_i^\vee=2\alpha_i/(\alpha_i,\alpha_i)$ and $\theta^\vee=2\theta/(\theta,\theta)$. Normalize the finite root inner product so $(\theta,\theta)=2$, put $\beta_0=-\theta$, $\beta_i=\alpha_i$, $\tau_0=1$, and $\tau_i=(\alpha_i,\alpha_i)/2>0$. For finite indices, $\tau_i a_{ij}=(\alpha_i,\alpha_j)=\tau_j a_{ji}$. For $j>0$, $a_{0j}=\alpha_j(h_0)=-(\alpha_j,\theta)$ and $a_{j0}=\alpha_0(h_j)=-2(\theta,\alpha_j)/(\alpha_j,\alpha_j)$, so $\tau_0a_{0j}=\tau_ja_{j0}$; and $a_{00}=\alpha_0(h_0)=2$. Hence $\widehat A$ is a finite symmetrizable GCM, and the matrix hypothesis of [F4] holds. The module $R$ is integrable because every affine simple raising or lowering generator is one of the root-current modes covered by [F1]. It is generated by the affine highest vector $v$ of weight $\lambda$, so Verma PBW gives finite-dimensional weight spaces and support in $\lambda-Q^+$; hence $R$ lies in affine category $\mathcal O$. By [F4] and [A1], $R$ is a direct sum of simple highest-weight modules. Its weight-$\lambda$ space is the line $\mathbb Cv$. Each projection of $v$ to a simple summand is singular; in a simple highest-weight module every singular vector is in its highest line, since a singular vector generates the whole simple module and PBW bounds the generated weights below its weight. Therefore exactly one summand has a nonzero projection of $v$; because $v$ generates $R$, that summand is all of $R$. To see $R$ is a VOA submodule, note it is stable under every current mode by its definition. For a current state $a$ and a state $b$ whose modes preserve $R$, module Jacobi gives
$$
((a_{(r)}b)^M)_{(m)}u=\sum_{j\ge0}(-1)^j\binom rj a^M_{(r-j)}b^M_{(m+j)}u-(-1)^r\sum_{j\ge0}(-1)^j\binom rj b^M_{(m+r-j)}a^M_{(j)}u.
$$
On fixed $u\in R$, lower truncation of the rightmost factor makes both sums finite, and each term preserves $R$. Induction over current-generated states shows every state mode preserves $R$. Affine simplicity then implies VOA simplicity. [A1, F1, F4, F5, F7, step 3.1, algebra]

5.1 Affine PBW orders $R$ as negative-loop words followed by zero modes on $v$; positive loops kill $v$. Equivalently it is spanned by negative-loop words applied to the finite-dimensional space $H$. A word of total loop degree $q$ raises the $L_0$ eigenvalue from $h$ by $q$ by [F5]. There are finitely many ordered negative-loop monomials of fixed total degree (finitely many mode indices summing to $q$ and finitely many basis vectors of $\mathfrak g$), each applied to finite-dimensional $H$. Thus the $L_0$ eigenspaces are finite-dimensional and the spectrum is contained in $h+\mathbb Z_{\ge0}$. PBW spanning by $L_0$ eigenvectors makes $L_0$ semisimple, and this spectrum is real-part lower bounded; [F6] makes the simple weak submodule an ordinary module. [F1, F4, F5, F6, F7, step 4.1, algebra] ∎

