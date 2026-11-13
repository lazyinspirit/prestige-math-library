---
id: prop-se-import-bgt-cutoff-resolvent
kind: proposition
domain: mathematics
title: Nontrapping cutoff resolvent estimates
status: draft
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - math:def-axiom-of-choice
  - math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: On nonlinear Schrödinger equations in exterior domains
      url: https://www.numdam.org/article/AIHPC_2004__21_3_295_0.pdf
      locator: Section 2.2, opening paragraph and Propositions 2.2 and 2.4, printed
        pp. 299–300, PDF pp. 5–6
      statement: The cutoff Dirichlet resolvent at $(\lambda\pm i\epsilon)^2$ has
        $L^2$ operator norm at most $C/|\lambda|$ for $|\lambda|\ge1$, and is
        uniformly bounded for $|\lambda|\le1$, when $0<\epsilon\ll1$. The
        opening paragraph also gives the uncut Dirichlet resolvent on $\mathbb
        C\setminus[0,\infty)$.
      hypotheses: Dimension at least two; smooth compact nontrapping obstacle; the
        low-frequency bound additionally assumes the obstacle is nonempty;
        smooth compactly supported cutoff.
      reading_limits: Read the opening spectral-domain assertion, the published
        statements and their surrounding explanation. The spectral-domain
        assertion and the sources cited there for the high- and low-frequency
        proofs were not independently reconstructed.
    - title: On nonlinear Schrödinger equations in exterior domains
      url: https://www.numdam.org/article/AIHPC_2004__21_3_295_0.pdf
      locator: Section 2.1, Dirichlet spectral scale and negative-order duality and
        interpolation, printed p. 299, PDF p. 5; Section 2.2, Proposition 2.5,
        equation (2.9), printed p. 300, PDF p. 6
      statement: For a nonnegative smooth compactly supported cutoff, the cutoff
        resolvent at $(\lambda\pm i\epsilon)^2$ is uniformly bounded from
        $H_D^s$ to $H_D^{s+1}$ for real $\lambda$, sufficiently small positive
        $\epsilon$, and $s\ge-1$.
      hypotheses: Dimension at least two; nonempty smooth compact nontrapping
        obstacle; Dirichlet Laplacian; the source's Dirichlet spectral scale.
        This item imports only $-1\le s\le1$.
      reading_limits: Read the proposition and its displayed argument on printed pp.
        300–301, including the endpoint duality and commutator discussion; no
        independent reconstruction of its cited resolvent inputs is claimed.
    - title: On nonlinear Schrödinger equations in exterior domains
      url: https://www.numdam.org/article/AIHPC_2004__21_3_295_0.pdf
      locator: Section 2.2, Remark 2.6, equation (2.10), printed p. 300, PDF p. 6
      statement: For $\operatorname{Re}z<0$, the cutoff resolvent from $H_D^s$ to
        $H_D^{s+1}$ has norm at most $C(1+|\operatorname{Re}z|)^{-1/2}$.
      hypotheses: The preceding Dirichlet exterior setting and cutoff; this item
        imports only $-1\le s\le1$.
      reading_limits: Read the displayed remark and the source's subsequent
        application in Proposition 2.7; the integration-by-parts assertion was
        not independently reconstructed.
external_input: true
dependency_level: 7
formulation_deps: &a1
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - math:def-axiom-of-choice
  - math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator
argument_deps: *a1
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be a nonempty smooth compact obstacle with connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and suppose that the obstacle is nontrapping. Let $\Delta_D$ be the Dirichlet Laplacian on $\Omega$, and let $H_D^s(\Omega)$ be the spectral scale of $I-\Delta_D$. Let $\chi\in C_c^\infty(\mathbb R^n)$ be real and nonnegative, acting by multiplication after restriction to $\Omega$.

Write $B=-\Delta_D$, let $\rho(B)$ denote its resolvent set, and use the library convention $R_B(z)=(zI-B)^{-1}$ for $z\in\rho(B)$. Thus the inverse in the estimates below is $(B-zI)^{-1}=-R_B(z)$, initially acting on $L^2(\Omega)$. All spectral parameters used below belong to $\rho(B)$.

For every $s\in[-1,1]$ there are constants $C_s>0$ and $\epsilon_0>0$ such that, for all $\lambda\in\mathbb R$ and $0<\epsilon\le\epsilon_0$, the cutoff resolvent $T_{\lambda,\epsilon}^{\pm}=\chi(-\Delta_D-(\lambda\pm i\epsilon)^2)^{-1}\chi$ extends boundedly from $H_D^s(\Omega)$ to $H_D^{s+1}(\Omega)$ and satisfies $\|T_{\lambda,\epsilon}^{\pm}\|_{H_D^s\to H_D^{s+1}}\le C_s$. The constants may depend on the obstacle, cutoff and $s$, but not on $\lambda$ or $\epsilon$.

For the same cutoff and sufficiently small $\epsilon>0$, the $L^2$ operator norm of $T_{\lambda,\epsilon}^{\pm}$ is at most $C|\lambda|^{-1}$ when $|\lambda|\ge1$ and at most $C$ when $|\lambda|\le1$, uniformly in those parameters. Also, for every $s\in[-1,1]$ and every complex $z$ with $\operatorname{Re}z<0$, $\|\chi(-\Delta_D-z)^{-1}\chi\|_{H_D^s\to H_D^{s+1}}\le C_s(1+|\operatorname{Re}z|)^{-1/2}$, uniformly in $z$.

## Statement references

[[def-se-geometry]]

[[def-se-nontrapping]]

[[def-se-dirichlet-scale]]

[[math:def-axiom-of-choice]]

[[math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]

## Facts & Assumptions

The exterior geometry and smoothness convention are those of [[def-se-geometry]]. The nontrapping condition uses the generalized reflected and glancing rays specified by [[def-se-nontrapping]].

The operator and scale are those of [[def-se-dirichlet-scale]]: $\Delta_D$ has domain $H^2(\Omega)\cap H^1_0(\Omega)$, and the scale is formed from powers of $I-\Delta_D$, with negative orders defined by completion and pivot duality. The use of this scale retains the full [[math:def-axiom-of-choice]] assumption recorded in its definition.

The resolvent set and operator are defined by [[math:def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]: $z\in\rho(B)$ means that $zI-B:D(B)\to L^2(\Omega)$ is bijective with bounded inverse on $L^2(\Omega)$. Since $B-zI=-(zI-B)$, the notation $(B-zI)^{-1}$ here is the negative of the supplier's $R_B(z)$.

## External input

At the start of Section 2.2, Burq, Gérard and Tzvetkov give the uncut resolvent of the positive self-adjoint operator $B=-\Delta_D$ on $\mathbb C\setminus[0,\infty)$; this spectral-domain assertion is imported. The stated parameter families lie in that domain: $(\lambda\pm i\epsilon)^2=\lambda^2-\epsilon^2\pm2i\lambda\epsilon$ is nonreal if $\lambda\ne0$ and equals $-\epsilon^2<0$ if $\lambda=0$, while $\operatorname{Re}z<0$ excludes $[0,\infty)$. Hence the displayed $L^2$ inverses exist before taking their cutoff extensions.

The high- and low-frequency $L^2$ bounds are imported from Propositions 2.2 and 2.4 of Burq, Gérard and Tzvetkov, under the geometry and parameter restrictions stated above. The low-frequency statement requires a nonempty obstacle.

The uniform $H_D^s\to H_D^{s+1}$ bound is imported from their Proposition 2.5. Its printed range is $s\ge-1$; this item uses only $-1\le s\le1$. The nonnegative cutoff hypothesis is retained.

The negative-real-part bound is imported from their Remark 2.6, equation (2.10), again only for $-1\le s\le1$. The source states that an integration by parts gives the estimate; no local proof of that input is claimed here.

## Source notes

The source defines the positive Dirichlet scale using the functional calculus of $I-\Delta_D$, and the negative range through duality and interpolation. The present item uses the corresponding frozen spectral-scale convention. The cited statements are independent of the article under study.
