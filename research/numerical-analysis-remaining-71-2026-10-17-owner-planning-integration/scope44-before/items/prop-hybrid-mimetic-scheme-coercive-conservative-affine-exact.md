---
id: prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact
kind: proposition
title: Coercivity, monotonicity, conservation, and affine exactness of the mimetic schemes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps: [def-fv-admissible-cell-face-mesh, def-hybrid-mimetic-fv-scheme]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§4, equations (4.7)–(4.9), PDF pp. 19–20: affine exactness, stabilization, and HMM coercivity."
    - title: "Konstantin Lipnikov and Gianmarco Manzini, Discretization of mixed formulations of elliptic problems on polyhedral meshes, 2016"
      url: "https://arxiv.org/pdf/1610.05850"
      locator: "§3.2–§3.3, PDF pp. 9–16: consistency and stability conditions for mixed-hybrid mimetic schemes."
---

## Statement

Let a finite boundary-anchored cell-face mesh satisfy the face-moment closure in [[def-hybrid-mimetic-fv-scheme]], and let every $A_K$ be symmetric positive definite. Define
$$ \|v\|_{K,\mathrm{mim}}^2=|K||G_Kv|^2+\sum_{F\subset\partial K}\frac{|F|}{d_{K,F}}\rho_{K,F}(v)^2. $$
Then $\mathscr A_K(v,v)\ge\lambda_{\min}(A_K)\|v\|_{K,\mathrm{mim}}^2$. The global Dirichlet matrix of the linear hybrid mimetic scheme is symmetric positive definite and has a unique solution for every finite cell-source vector. Its induced numerical fluxes satisfy the cellwise balance and opposite-flux identity on each interior face. For any affine $\ell(x)=b\cdot x+c$, the local linear flux is exactly $Q_{K,F}(\ell)=-|F|(A_Kb)\cdot n_{K,F}$. For the nonlinear $p$-growth extension in [[def-hybrid-mimetic-fv-scheme]], the spatial operator is monotone and coercive in the reconstructed gradient and residual variables, and its shared interior face fluxes are conservative at each implicit time step.

## Facts & Assumptions

**Given:** A finite boundary-anchored cell-face mesh, cell and face centroid degrees of freedom, the face-moment closure, positive tensors $A_K$, and the linear hybrid mimetic scheme of [[def-hybrid-mimetic-fv-scheme]].

[F1] [[def-fv-admissible-cell-face-mesh]]: cells and faces have positive finite measures, an interior face is shared by exactly two cells, and the cell graph is boundary anchored.

[F2] [[def-hybrid-mimetic-fv-scheme]]: $G_Kv=|K|^{-1}\sum_F|F|v_Fn_{K,F}$, $\rho_{K,F}(v)=v_F-v_K-G_Kv\cdot(x_F-x_K)$, and $\mathscr A_K$ is the sum of the tensor-gradient term and the nonnegative residual stabilization.

[A1] Each $A_K$ is symmetric positive definite, so $z\cdot A_Kz\ge\lambda_{\min}(A_K)|z|^2$ for every $z\in\mathbb R^d$.

[A2] In the nonlinear branch, $a(x,\xi)$ has the cellwise growth, coercivity, and monotonicity assumptions in [[def-hybrid-mimetic-fv-scheme]], with $p>1$ and $\alpha_{0,K}>0$.

## Proof

1.1 For an affine $\ell(x)=b\cdot x+c$, the cell and face means are $\ell_K=\ell(x_K)$ and $\ell_F=\ell(x_F)$. The first face-moment identity annihilates the constant term in $G_K\ell$; the transpose of the second identity is $\sum_F|F|n_{K,F}\otimes x_F=|K|I_d$, so $G_K\ell=b$. Hence $\rho_{K,F}(\ell)=\ell_F-\ell_K-b\cdot(x_F-x_K)=0$. [F2, given, algebra]

1.2 For arbitrary $v$, [A1] gives $|K|(A_KG_Kv)\cdot G_Kv\ge\lambda_{\min}(A_K)|K||G_Kv|^2$. The stabilization coefficient is $\lambda_{\min}(A_K)>0$, so summing its squared residual terms gives $\mathscr A_K(v,v)\ge\lambda_{\min}(A_K)\|v\|_{K,\mathrm{mim}}^2$. [A1, F2, algebra]

1.3 For the nonlinear flux, the cell average preserves monotonicity because $(b_K(\xi)-b_K(\eta))\cdot(\xi-\eta)=\frac1{|K|}\int_K(a(x,\xi)-a(x,\eta))\cdot(\xi-\eta)\,dx\ge0.$ The pointwise bounds in [A2] also give $b_K(\xi)\cdot\xi\ge\alpha|\xi|^p-|K|^{-1}\int_Kh$ and $|b_K(\xi)|\le C(|K|^{-1}\int_Kg+|\xi|^{p-1})$. Thus the averaged flux retains monotonicity, coercivity, and $p$-growth. [A2, given, algebra]

2.1 The global form is symmetric because each $A_K$ is symmetric and the residual term is a symmetric product. If its energy at $v$ is zero, step 1.2 forces $G_Kv=0$ and every $\rho_{K,F}(v)=0$. The latter then gives $v_F=v_K$ on every face. Shared face values make all adjacent cell values equal, and a boundary face has prescribed value zero; boundary anchoring propagates this zero to every cell. Thus the homogeneous matrix has trivial kernel. It is square and finite-dimensional, so it is invertible and positive definite; every cell-source vector has a unique solution. [F1, step 1.2, given, algebra]

2.2 For an interior face $F=K|L$, the global equation tested by its shared face basis function gives $\mathscr A_K(u,\phi_{K,F})+\mathscr A_L(u,\phi_{L,F})=0$, hence $Q_{K,F}+Q_{L,F}=0$. For a cell basis $\phi_K$, the equation gives $\mathscr A_K(u,\phi_K)=\int_Kf$. The local constant vector $\mathbf1_K=\phi_K+\sum_{F\subset\partial K}\phi_{K,F}$ has zero reconstructed gradient by the first face-moment identity and zero residual; therefore $\mathscr A_K(u,\mathbf1_K)=0$. Expanding this identity and using the cell equation yields $\sum_{F\subset\partial K}Q_{K,F}=\int_Kf$. [F1, F2, step 1.1, given, algebra]

2.3 If $u$ is the face and cell averages of an affine $\ell$, step 1.1 gives $G_Ku=b$ and all residuals of $u$ vanish. For the local face basis, $G_K\phi_{K,F}=|F|n_{K,F}/|K|$. Thus $\mathscr A_K(u,\phi_{K,F})=|F|(A_Kb)\cdot n_{K,F}$, and the definition $Q_{K,F}=-\mathscr A_K(u,\phi_{K,F})$ gives the exact outward diffusive flux. [F2, step 1.1, given, algebra]

3.1 The scalar map $\psi_p(s)=|s|^{p-2}s$ is increasing: it is increasing on each half-line by monotonicity of $r\mapsto r^{p-1}$ for $r\ge0$, and its values are nonpositive on $s\le0$ and nonnegative on $s\ge0$. Hence $(\psi_p(r)-\psi_p(s))(r-s)\ge0$. For any two states $u,v$, the difference $\mathcal A_{h,K}(u;u-v)-\mathcal A_{h,K}(v;u-v)$ is the sum of $|K|(b_K(G_Ku)-b_K(G_Kv))\cdot(G_Ku-G_Kv)$ and the nonnegative residual terms $\alpha_{0,K}|F|d_{K,F}^{1-p}(\psi_p(\rho_{K,F}(u))-\psi_p(\rho_{K,F}(v)))(\rho_{K,F}(u)-\rho_{K,F}(v))$. Step 1.3 and scalar monotonicity make every term nonnegative. Testing with $v=u$ and using the coercivity bound in [A2] yields $\mathcal A_{h,K}(u;u)\ge |K|\left(\alpha|G_Ku|^p-|K|^{-1}\int_Kh\right)+\alpha_{0,K}\sum_F\frac{|F|}{d_{K,F}^{p-1}}|\rho_{K,F}(u)|^p.$ For a fixed state, the local constant test vector has zero gradient and residual, so the spatial form annihilates it. A shared interior-face test in an implicit step makes $Q_{K,F}^{\rm nl}+Q_{L,F}^{\rm nl}=0$. Testing the step equation by the cell basis gives $\mathcal A_{h,K}(u^n;\phi_K)=|K|f_K^n-|K|(u_K^n-u_K^{n-1})/\tau_n$. Expanding the zero constant-test identity gives $\sum_FQ_{K,F}^{\rm nl}=|K|f_K^n-|K|(u_K^n-u_K^{n-1})/\tau_n$, the local balance with accumulation. [A2, F1, F2, step 1.3, algebra] ∎

## Remarks

The proposition proves local coercivity in the explicitly defined gradient-residual norm and affine flux exactness. It does not assert a discrete maximum principle for the mimetic scheme or a mesh-uniform condition number without additional mesh-family estimates.
