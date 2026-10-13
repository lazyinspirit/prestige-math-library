---
id: lem-highest-weight-tensor-maps-and-their-adjunction
kind: lemma
title: "Highest weight tensor maps, their adjunction and the retraction $S_{\\lambda,\\mu}$"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-contravariant-form-on-an-integrable-quantum-highest-weight-module, def-kac-moody-integral-and-dominant-integral-weights, def-quantum-verma-module-and-simple-highest-weight-quotient, def-quantum-weight-module-and-integrability, def-tensor-product-of-modules-by-generators-and-relations, thm-integrable-quantum-highest-weight-module-exists-and-is-unique, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra, lem-cartan-projection-constructs-the-quantum-verma-contravariant-form]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§2.5, printed pp. 475–477: polarization and highest tensor summand; §4.1, printed p. 488, (4.1.1)–(4.1.4): Phi, Psi, splitting and S."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§7, printed p. 26, (7.1)–(7.3): product form and adjunction; printed p. 32, (7.4): retraction S."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "§13.3, printed pp. 332–334: coproduct convention and contravariant form background; the tensor adjoint construction is proved locally."
---

## Statement

All $U_q(\mathfrak g)$-module maps below preserve the chosen $P$-label gradings, as required of morphisms in [[def-quantum-weight-module-and-integrability]]. The $U_q^-$-linear map $S_{\lambda,\mu}$ instead shifts labels by $-\mu$.

Let $\lambda,\mu\in P^+$ and let $V(\lambda)=L(\lambda)$, $V(\mu)$, $V(\lambda+\mu)$ be the simple integrable highest weight modules with highest weight vectors $v_\lambda,v_\mu,v_{\lambda+\mu}$ ([[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]). Equip $V(\lambda)\otimes V(\mu)$ with the $U_q(\mathfrak g)$-module structure given by the coproduct $\Delta$ of [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]] ([[def-tensor-product-of-modules-by-generators-and-relations]]).

(i) $v_\lambda\otimes v_\mu$ is a highest weight vector of weight $\lambda+\mu$, and its cyclic submodule $U_q(\mathfrak g)(v_\lambda\otimes v_\mu)$ is isomorphic to $V(\lambda+\mu)$.

(ii) There are unique $U_q(\mathfrak g)$-module maps
$$\Phi_{\lambda,\mu}:V(\lambda+\mu)\to V(\lambda)\otimes V(\mu),\qquad \Psi_{\lambda,\mu}:V(\lambda)\otimes V(\mu)\to V(\lambda+\mu)$$
with $\Phi_{\lambda,\mu}(v_{\lambda+\mu})=v_\lambda\otimes v_\mu$ and $\Psi_{\lambda,\mu}(v_\lambda\otimes v_\mu)=v_{\lambda+\mu}$; they satisfy $\Psi_{\lambda,\mu}\circ\Phi_{\lambda,\mu}=\operatorname{id}_{V(\lambda+\mu)}$, $\Phi_{\lambda,\mu}$ is injective with image $U_q(\mathfrak g)(v_\lambda\otimes v_\mu)$, $\Psi_{\lambda,\mu}$ is surjective, and $V(\lambda)\otimes V(\mu)=\operatorname{Im}\Phi_{\lambda,\mu}\oplus\ker\Psi_{\lambda,\mu}$.

(iii) Let $(\ ,\ )$ be the contravariant form on $V(\lambda)$ of [[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]] and similarly on $V(\mu)$; define the symmetric bilinear form on $V(\lambda)\otimes V(\mu)$ by $(u_1\otimes u_2,v_1\otimes v_2)=(u_1,v_1)(u_2,v_2)$. Then for all $u,v$ and all $i\in I$, $h\in P^\vee$,
$$(K_hu,v)=(u,K_hv),\qquad (E_iu,v)=(u,q_iF_iK_i^{-1}v),\qquad (F_iu,v)=(u,q_i^{-1}K_iE_iv),$$
and the maps of (ii) are adjoint: $(\Psi_{\lambda,\mu}u,v)=(u,\Phi_{\lambda,\mu}v)$ for all $u\in V(\lambda)\otimes V(\mu)$, $v\in V(\lambda+\mu)$. In particular $\Phi_{\lambda,\mu}$ is an isometry onto its image.

(iv) The linear map $S_{\lambda,\mu}:V(\lambda)\otimes V(\mu)\to V(\lambda)$ defined by
$$S_{\lambda,\mu}(u\otimes v_\mu)=u\quad(u\in V(\lambda)),\qquad S_{\lambda,\mu}\Bigl(V(\lambda)\otimes\sum_{i\in I}F_iV(\mu)\Bigr)=0$$
is well defined, because $V(\mu)=\mathbb Q(q)v_\mu\oplus\sum_{i\in I}F_iV(\mu)$; it is $U_q^-$-linear for the left multiplication action of $U_q^-$, and $S_{\lambda,\mu}\circ\Phi_{\lambda,\mu}$ is the unique $U_q^-$-linear surjection $V(\lambda+\mu)\to V(\lambda)$ with $v_{\lambda+\mu}\mapsto v_\lambda$. No choice principle is used.

## Facts & Assumptions

**Given:** Dominant integral weights $\lambda,\mu$, the simple integrable highest weight modules $V(\lambda),V(\mu),V(\lambda+\mu)$, the coproduct $\Delta$, and the normalized contravariant forms on the three modules.

[F1] Each $V(\nu)$ is the simple integrable highest weight module: it is generated over $U_q(\mathfrak g)$ by $v_\nu$, has support $\nu-Q_+$ with finite-dimensional weight spaces, and is universal among integrable cyclic highest weight modules of weight $\nu$, the map being determined by the image of the highest vector ([[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]], [[def-quantum-verma-module-and-simple-highest-weight-quotient]]).

[F2] $\Delta E_i=E_i\otimes K_i^{-1}+1\otimes E_i$, $\Delta F_i=F_i\otimes1+K_i\otimes F_i$, $\Delta K_h=K_h\otimes K_h$; tensor products of modules are modules, and the tensor weight spaces are the sums of the tensor products of the weight spaces ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]], [[def-tensor-product-of-modules-by-generators-and-relations]], [[def-quantum-weight-module-and-integrability]]).

[F3] Normalized homogeneous contravariant form: there is a unique symmetric bilinear form on each $V(\nu)$ that is homogeneous, $\sigma$-contravariant for the anti-involution $\sigma$ fixing every $K_h$ and satisfying $\sigma(E_i)=q_iF_iK_i^{-1}$, $\sigma(F_i)=q_i^{-1}K_iE_i$, and normalized by $(v_\nu,v_\nu)=1$; it is nondegenerate on every finite-dimensional weight space, and $(Xu,v)=(u,\sigma(X)v)$ for all $X\in U_q(\mathfrak g)$ ([[lem-cartan-projection-constructs-the-quantum-verma-contravariant-form]], [[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]]).

[F4] $\Delta\sigma=(\sigma\otimes\sigma)\Delta$ on generators (hence on $U_q(\mathfrak g)$), because both sides send $K_h$ to $K_h\otimes K_h$, $E_i$ to $q_iF_iK_i^{-1}\otimes K_i^{-1}+1\otimes q_iF_iK_i^{-1}$ and $F_i$ to $q_i^{-1}K_iE_i\otimes1+q_i^{-1}K_i\otimes K_iE_i$ ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]], [F3]).

[F5] The root-lattice decomposition $V(\mu)=\bigoplus_{\nu\in Q_+}V(\mu)_{\mu-\nu}$ has $V(\mu)_\mu=\mathbb Q(q)v_\mu$ and $\sum_{i\in I}F_iV(\mu)=\bigoplus_{\nu\in Q_+\setminus\{0\}}V(\mu)_{\mu-\nu}$ ([[def-kac-moody-integral-and-dominant-integral-weights]], [[def-quantum-weight-module-and-integrability]], [F1]).

## Proof

**Proof technique:** direct. The tensor product is integrable with finite weight spaces; universality gives $\Phi$ and the form's adjoint gives $\Psi$; the $U_q^-$-projection $S$ is read off the root-degree decomposition.

1.1 The highest vector. By [F2], $\Delta E_i(v_\lambda\otimes v_\mu)=E_iv_\lambda\otimes K_i^{-1}v_\mu+v_\lambda\otimes E_iv_\mu=0$ and $\Delta K_h(v_\lambda\otimes v_\mu)=q^{\langle\lambda,h\rangle}q^{\langle\mu,h\rangle}v_\lambda\otimes v_\mu$, so $v_\lambda\otimes v_\mu$ is a highest weight vector of weight $\lambda+\mu$; it is nonzero. [F2, algebra]

1.2 Integrability and finite weight spaces of the tensor product. Write $A:=E_i\otimes K_i^{-1}$ and $B:=1\otimes E_i$, so $\Delta E_i=A+B$ and $AB=q^{-\langle\alpha_i,d_ih_i\rangle}BA=z^{-2}BA$ with $z=q_i$; for a pure tensor $x\otimes y$ choose $N,M$ with $E_i^Nx=0$ and $E_i^My=0$ (local nilpotence of $E_i$ on $V(\lambda),V(\mu)$), then $A^N$ and $B^M$ kill $x\otimes y$, and expanding $(A+B)^{N+M}$ into $q$-commuting monomials $A^{N+M-s}B^s$ shows that every term contains either $A^N$ or $B^M$; hence $\Delta E_i$ is locally nilpotent, and the same argument with $\Delta F_i=F_i\otimes1+K_i\otimes F_i$ gives local nilpotence of $\Delta F_i$. A fixed tensor weight $\nu$ is a sum $\beta+\gamma$ of weights; a fixed root degree $\alpha$ has only finitely many decompositions $\alpha=\beta+\gamma$ with $\beta,\gamma\in Q_+$ (each $\beta_i\le\alpha_i$ for the finite index set $I$), and the contributing spaces $V(\lambda)_{\lambda-\beta}\otimes V(\mu)_{\mu-\gamma}$ are finite-dimensional by [F1]; hence every tensor weight space is finite-dimensional. [F1, F2, algebra]

1.3 The product form is contravariant. Define $(x\otimes y,x'\otimes y'):=(x,x')(y,y')$; this is symmetric and bilinear, and for $X\in U_q(\mathfrak g)$ one has $(\Delta(X)(x\otimes y),x'\otimes y')=((x\otimes y),(\sigma\otimes\sigma)(\Delta X)(x'\otimes y'))=((x\otimes y),\Delta(\sigma X)(x'\otimes y'))$ by [F4], because $\sigma$-contravariance holds on each factor. Hence the product form is $\sigma$-contravariant for the tensor action, and the three displayed identities follow from the values of $\sigma$ on $K_h,E_i,F_i$ recalled in [F3]. [F3, F4, algebra]

1.4 Part (iv): well-definedness. By [F5], $V(\mu)=\mathbb Q(q)v_\mu\oplus\sum_iF_iV(\mu)$, so every $w\in V(\mu)$ has a unique decomposition $w=cv_\mu+w'$ with $c\in\mathbb Q(q)$ and $w'\in\sum_iF_iV(\mu)$; setting $S_{\lambda,\mu}(u\otimes w):=cu$ and extending bilinearly gives the stated well-defined linear map. [F5, algebra]

2.1 Part (i). By steps 1.1-1.2 the cyclic submodule $N:=U_q(\mathfrak g)(v_\lambda\otimes v_\mu)$ is an integrable cyclic highest weight module of weight $\lambda+\mu$ with highest vector $v_\lambda\otimes v_\mu$, so the universality in [F1] gives a $U_q(\mathfrak g)$-module map $V(\lambda+\mu)\to N$ with $v_{\lambda+\mu}\mapsto v_\lambda\otimes v_\mu$; it is nonzero, and its kernel is a submodule of the simple module $V(\lambda+\mu)$ not containing the highest vector, hence zero. Therefore $V(\lambda+\mu)\cong N$. [F1, step 1.1, step 1.2]

2.2 Part (iv): $U_q^-$-linearity. For $w\in\sum_iF_iV(\mu)$ and any $u\in V(\lambda)$ one has $\Delta F_j(u\otimes w)=F_ju\otimes w+K_ju\otimes F_jw$ with both second factors in $\sum_iF_iV(\mu)$, so both terms are killed by $S_{\lambda,\mu}$ and $S_{\lambda,\mu}(\Delta F_j\cdot u\otimes w)=0=F_jS_{\lambda,\mu}(u\otimes w)$; for $w=v_\mu$, $\Delta F_j(u\otimes v_\mu)=F_ju\otimes v_\mu+K_ju\otimes F_jv_\mu$ has first term mapped to $F_ju$ and second term killed, so $S_{\lambda,\mu}\Delta F_j=F_jS_{\lambda,\mu}$ on $V(\lambda)\otimes V(\mu)$. Since the $F_j$ generate $U_q^-$ and the actions are linear, $S_{\lambda,\mu}$ is $U_q^-$-linear. [F2, step 1.4, algebra]

3.1 Part (ii), existence and uniqueness. The same universality gives $\Phi_{\lambda,\mu}$ with $\Phi_{\lambda,\mu}(v_{\lambda+\mu})=v_\lambda\otimes v_\mu$; by step 2.1 its image is exactly $N$, and $\Phi_{\lambda,\mu}$ is injective since $V(\lambda+\mu)$ is simple. It is unique because $V(\lambda+\mu)$ is generated by its highest vector. [F1, step 2.1]

3.2 Part (iv): the composite. $S_{\lambda,\mu}\Phi_{\lambda,\mu}$ is $U_q^-$-linear and sends $v_{\lambda+\mu}$ to $S_{\lambda,\mu}(v_\lambda\otimes v_\mu)=v_\lambda$; it is surjective because $U_q^-v_\lambda=V(\lambda)$ by [F1]. Any $U_q^-$-linear map $V(\lambda+\mu)\to V(\lambda)$ with $v_{\lambda+\mu}\mapsto v_\lambda$ agrees with it on the cyclic vector and hence everywhere, since $V(\lambda+\mu)=U_q^-v_{\lambda+\mu}$; this is the asserted uniqueness. [F1, step 1.4, step 2.2]

4.1 The adjoint $\Psi$ and Part (iii). The Cartan construction is homogeneous for the chosen labels, even when toral characters coincide; hence the product form is likewise label-homogeneous. For each weight $\nu$, the form on $V(\lambda+\mu)_\nu$ is nondegenerate by [F3], and $\Phi_{\lambda,\mu}$ maps $V(\lambda+\mu)_\nu$ injectively into the finite-dimensional space $(V(\lambda)\otimes V(\mu))_\nu$; the prescription $(\Psi_{\lambda,\mu}u,v):=(u,\Phi_{\lambda,\mu}v)$ for $v\in V(\lambda+\mu)$ therefore defines $\Psi_{\lambda,\mu}$ uniquely and $\mathbb Q(q)$-linearly. It is a $U_q(\mathfrak g)$-module map because for $X\in U_q(\mathfrak g)$, $(\Psi_{\lambda,\mu}Xu,v)=(Xu,\Phi_{\lambda,\mu}v)=(u,\sigma(X)\Phi_{\lambda,\mu}v)=(u,\Phi_{\lambda,\mu}\sigma(X)v)=(\Psi_{\lambda,\mu}u,\sigma(X)v)=(X\Psi_{\lambda,\mu}u,v)$. The pullback form $(v,v')\mapsto(\Phi_{\lambda,\mu}v,\Phi_{\lambda,\mu}v')$ is a homogeneous $\sigma$-contravariant form on $V(\lambda+\mu)$ with top norm $(v_\lambda,v_\lambda)(v_\mu,v_\mu)=1$, so by uniqueness in [F3] it equals the normalized form of $V(\lambda+\mu)$; hence $\Phi_{\lambda,\mu}$ is an isometry onto its image. Then $(\Psi_{\lambda,\mu}\Phi_{\lambda,\mu}v,v')=(\Phi_{\lambda,\mu}v,\Phi_{\lambda,\mu}v')=(v,v')$ for all $v'$, so $\Psi_{\lambda,\mu}\Phi_{\lambda,\mu}=\mathrm{id}$ and $\Psi_{\lambda,\mu}$ is surjective with the stated adjunction. The endomorphism $\Phi_{\lambda,\mu}\Psi_{\lambda,\mu}$ is idempotent with image $\operatorname{Im}\Phi_{\lambda,\mu}$ and kernel $\ker\Psi_{\lambda,\mu}$, which gives the direct splitting of (ii). [F3, step 3.1, step 1.3, algebra]

5.1 Uniqueness of $\Psi$. Let $\Psi'$ be a grading-preserving $U_q(\mathfrak g)$-module map with $\Psi'(v_\lambda\otimes v_\mu)=v_{\lambda+\mu}$, and let $(\Psi')^{*}$ be its adjoint defined by $((\Psi')^{*}v,u)=(v,\Psi'u)$. Then $(\Psi')^{*}$ is a module map and $((\Psi')^{*}v_{\lambda+\mu},v_\lambda\otimes v_\mu)=(v_{\lambda+\mu},v_{\lambda+\mu})=1$, so $(\Psi')^{*}v_{\lambda+\mu}=v_\lambda\otimes v_\mu$ because the $(\lambda+\mu)$-weight space of the tensor product is the one-dimensional space $\mathbb Q(q)(v_\lambda\otimes v_\mu)$; by uniqueness in step 3.1, $(\Psi')^{*}=\Phi_{\lambda,\mu}$, and taking adjoints gives $\Psi'=\Psi_{\lambda,\mu}$. [step 3.1, step 4.1]

6.1 Choice. The maps are defined by universal properties (determined by the image of the highest vector) and by adjunction against nondegenerate forms on finite-dimensional spaces; no basis, complement or lift is selected, so no choice principle is used. [step 4.1, step 3.2, algebra] ∎
