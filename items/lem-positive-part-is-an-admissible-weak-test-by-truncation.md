---
id: lem-positive-part-is-an-admissible-weak-test-by-truncation
kind: lemma
title: "Positive-part truncation calculus and admissible cut-off weak tests"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, cor-positive-negative-part-and-truncation-calculus-in-w-one-p, cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p, thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions, lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces, lem-weak-leibniz-rule-with-a-smooth-factor, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-hk-and-hk-zero-notation, lem-compact-support-zero-extension-in-wkp, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-acl-characterisation-of-w-one-p, lem-acl-representatives-reconstruct-weak-gradients-by-fubini, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 13, printed pp. 147-158: the boundary conventions (i)-(iv), Lemma 3 (u^+ in W^{1,p} with Du^+ = 1_{u>0}Du) and its use as a test function in the proof of Theorem 4 (read in full)"
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Lemma 5 and its truncation test functions, printed pp. 1-7 (read in full)"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice together with the Axiom of Choice, inherited through the published ACL characterisation and the chain-rule interfaces cited below. Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, let $u\in H^1(\Omega;\mathbb R)$ and $k\in\mathbb R$, and put $u_k:=(u-k)^+$ and $u^-_k:=(u-k)^-$ on measurable representatives.
Then $u_k,u^-_k\in H^1_{\mathrm{loc}}(\Omega;\mathbb R)$ with
$$Du_k=\mathbf 1_{\{u>k\}}Du,\qquad Du^-_k=-\mathbf 1_{\{u<k\}}Du\qquad\text{a.e. on }\Omega,$$
and $Du_k=0$ a.e. on $\{u\le k\}$. If $|\Omega|<\infty$, then $u_k,u^-_k\in H^1(\Omega)$; more generally, either truncation belongs to $H^1(\Omega)$ whenever that truncation is in $L^2(\Omega)$. In particular, $u_k\in H^1(\Omega)$ for $k\ge0$, and $u^-_k\in H^1(\Omega)$ for $k\le0$. If $n\ge2$, $\Omega$ is bounded and $C^1$, and $u_k\in H^1_0(\Omega)$, then this membership is the boundary condition $u\le k$ on $\partial\Omega$ in the sense of [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]. For every $\eta\in C_c^\infty(\Omega)$ the product $\eta^2u_k$ lies in $H^1_0(\Omega)$ with
$$D(\eta^2u_k)=2\eta u_k\,D\eta+\eta^2Du_k\qquad\text{a.e. on }\Omega,$$
so $\eta^2u_k$ belongs to the Sobolev test space. It is admissible in the global $H^{-1}$ formulation when the source pairing is continuous; for a local inequality with $f\in L^2_{\mathrm{loc}}$, its pairing extends by density on a bounded neighborhood of the cutoff support. No pairing with a general $L^1_{\mathrm{loc}}$ source and an arbitrary $H^1_0$ test is asserted. The same membership conclusions hold for $k$-translates of $u^+$ and for the cut-off functions $\eta^2u_k$ with $\eta\in W^{1,\infty}_c(\Omega)$.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; an open set $\Omega\subseteq\mathbb R^n$ with $n\ge1$; a real class $u\in H^1(\Omega;\mathbb R)$; a real level $k$; and $u_k=(u-k)^+$, $u^-_k=(u-k)^-$.

[F1] $H^1(\Omega;\mathbb R)=W^{1,2}(\Omega;\mathbb R)$ consists of the classes in $L^2(\Omega;\mathbb R)$ whose first weak derivatives exist as $L^2$ classes; the weak-derivative formula is the signed test identity ([[def-hk-and-hk-zero-notation]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] Assume the Axiom of Choice. For $u\in W^{1,p}(\Omega;\mathbb R)$ and $F:\mathbb R\to\mathbb R$ Lipschitz: $F\circ u\in W^{1,p}_{\mathrm{loc}}(\Omega)$ with $D_i(F\circ u)=F'(u)D_iu$ almost everywhere where $F$ is differentiable at $u$, the product being taken as $0$ on the null level set $N_F$; moreover $F\circ u\in W^{1,p}(\Omega)$ exactly when $F(u)\in L^p(\Omega)$ ([[thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]]).

[F3] Assume the Axiom of Choice. For $w\in W^{1,p}(\Omega;\mathbb R)$, $w^+,w^-\in W^{1,p}(\Omega;\mathbb R)$ with $D_iw^+=1_{\{w>0\}}D_iw$, $D_iw^-=-1_{\{w<0\}}D_iw$ and $D_iw=0$ almost everywhere on $\{w=0\}$ ([[cor-positive-negative-part-and-truncation-calculus-in-w-one-p]]).

[F4] Assume the Axiom of Choice. For $\eta\in C_c^\infty(\Omega)$ and $w\in W^{1,p}(\Omega)$, the product $\eta w$ lies in $W^{1,p}(\Omega)$ and $D_i(\eta w)=\eta D_iw+ wD_i\eta$ almost everywhere ([[lem-weak-leibniz-rule-with-a-smooth-factor]], [[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]]).

[F5] Assume Countable Choice. If $w\in H^1(\Omega)$ vanishes almost everywhere outside a compact set $K_0\subset\Omega$, then its zero extension lies in $H^1(\mathbb R^n)$ and is approximated in the $H^1$ norm by compactly supported smooth functions; choosing mollifier radii smaller than $\operatorname{dist}(K_0,\partial\Omega)$ and restricting the approximants exhibits $w$ as an $H^1(\Omega)$-limit of $C_c^\infty(\Omega)$ functions, hence $w\in H^1_0(\Omega)$ ([[lem-compact-support-zero-extension-in-wkp]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F6] Weak boundary order: when $n\ge2$ and $\Omega$ is a bounded $C^1$ domain, $u\le k$ on $\partial\Omega$ means $(u-k)^+\in H^1_0(\Omega)$ ([[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]).

[F7] Assume the Axiom of Choice. ACL product rule: if $\eta\in W^{1,\infty}_c(\Omega;\mathbb R)$ and $w\in H^1(\Omega;\mathbb R)$, then $\eta w\in H^1(\Omega;\mathbb R)$ with $D_i(\eta w)=\eta D_iw+wD_i\eta$ almost everywhere. Indeed $\eta$ and $w$ have ACL representatives whose sections are absolutely continuous on almost every line ([[thm-acl-characterisation-of-w-one-p]]), the ordinary product rule holds along those lines, and the resulting a.e. line derivatives determine the weak derivative by the reconstruction lemma ([[lem-acl-representatives-reconstruct-weak-gradients-by-fubini]]).

## Proof

**Proof technique:** direct; the truncations are produced by the globally Lipschitz chain rule, and the cut-off tests by the product rules and the compact-support characterisation of $H^1_0$.

1.1 The function $F(t):=(t-k)^+$ is Lipschitz with constant $1$ and differentiable off $k$; the chain rule [F2] gives $u_k\in H^1_{\mathrm{loc}}(\Omega)$ and $D_iu_k=1_{\{u>k\}}D_iu$ locally a.e. If $|\Omega|<\infty$, the bound $u_k\le|u|+|k|$ gives $u_k\in L^2(\Omega)$ and hence $H^1(\Omega)$; if $k\ge0$, then $0\le u_k\le u^+$, which gives global membership without a finite-measure assumption. In general, global membership follows whenever $u_k\in L^2(\Omega)$, since its weak gradient is bounded by $|Du|$. [given, F1, F2]

1.2 Likewise $G(t):=(t-k)^-=\max\{k-t,0\}$ is Lipschitz with constant $1$ and differentiable off $k$; the chain rule gives $u^-_k\in H^1_{\mathrm{loc}}(\Omega)$ and $D_iu^-_k=-1_{\{u<k\}}D_iu$ locally a.e. If $|\Omega|<\infty$, then $u^-_k\in L^2(\Omega)$ and hence $H^1(\Omega)$; if $k\le0$, then $0\le u^-_k\le u^-$. In general, global membership follows whenever $u^-_k\in L^2(\Omega)$. [given, F1, F2]

2.1 On $\{u\le k\}$ the indicator $1_{\{u>k\}}$ vanishes, so the almost-everywhere identity of step 1.1 gives $D_iu_k=0$ almost everywhere on $\{u\le k\}$, and a fortiori almost everywhere on $\{u<k\}$; at level $k=0$ this is exactly the positive-part calculus of [F3] for $w=u$, whose formula $D_iw^+=1_{\{w>0\}}D_iw$ agrees with step 1.1. The same argument applied to step 1.2 gives $D_iu^-_k=0$ almost everywhere on $\{u\ge k\}$. [step 1.1, step 1.2, F3]

2.2 If $n\ge2$ and $\Omega$ is a bounded $C^1$ domain, the equivalence "$u_k\in H^1_0(\Omega)$ if and only if $u\le k$ on $\partial\Omega$" is the definition of the weak boundary order in [F6], read with $u_k=(u-k)^+$; no pointwise boundary values are involved. [step 1.1, F6, given]

2.3 Let $\eta\in C_c^\infty(\Omega)$ and put $v:=\eta^2u_k$. Choose a bounded neighborhood $V$ of $\operatorname{supp}\eta$ with $\overline V\subset\Omega$. By step 1.1, $u_k\in H^1(V)$; the product rule [F4] gives $v\in H^1(\Omega)$ with $D_i v=2\eta u_kD_i\eta+\eta^2D_iu_k$ almost everywhere. Its support is compact in $\Omega$, so [F5] gives $v\in H^1_0(\Omega)$. Since $\eta^2\ge0$ and $u_k\ge0$, it is a nonnegative Sobolev test. If the source is in $L^2_{\mathrm{loc}}$ on $V$, density extends the local inequality to this test; it is also valid for the global formulation whenever the source defines a continuous functional on $H^1_0$. For a general $L^1_{\mathrm{loc}}$ source, membership alone does not assert that the pairing is defined. [step 1.1, F4, F5]

3.1 Now let $\eta\in W^{1,\infty}_c(\Omega)$. On a bounded neighborhood $V$ of its support, the ACL product rule [F7] applied twice gives $\eta^2u_k\in H^1(\Omega)$ with $D_i(\eta^2u_k)=2\eta u_kD_i\eta+\eta^2D_iu_k$ almost everywhere. Its compact support and nonnegativity again give $\eta^2u_k\in H^1_0(\Omega)$; admissibility in an inequality requires the same source-pairing condition as in step 2.3. [step 2.3, F5, F7]

4.1 Apply steps 1.1-3.1 to $v=u^+$ and $v=u^-$, both of which lie in $H^1(\Omega;\mathbb R)$ by [F3]. For every $\kappa\in\mathbb R$, each truncation $(v-\kappa)^\pm$ lies in $H^1_{\mathrm{loc}}(\Omega)$ with the corresponding level-set gradient formula, and its cutoff products with $\eta\in C_c^\infty(\Omega)$ or $\eta\in W^{1,\infty}_c(\Omega)$ lie in $H^1_0(\Omega)$. Global $H^1(\Omega)$ membership holds when $|\Omega|<\infty$ or when that truncation is in $L^2(\Omega)$; in particular $(v-\kappa)^+\in H^1(\Omega)$ for $\kappa\ge0$, while $(v-\kappa)^-=0$ for $\kappa\le0$ because $v\ge0$. Admissibility in a weak inequality still requires the source pairing to extend continuously to the test space, as specified in the Definition. All steps use only Countable Choice and the Axiom of Choice as declared in [F2]-[F5] and [F7]. [step 1.1, step 1.2, step 2.3, step 3.1, F3] ∎
