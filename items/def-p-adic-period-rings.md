---
id: def-p-adic-period-rings
kind: definition
title: Fontaine's p-adic period rings and their structures
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-absolute-galois-group-of-a-local-field
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-p-typical-witt-vectors-of-a-perfect-field
  - def-p-typical-witt-vectors-of-a-perfect-ring
  - def-local-p-adic-cyclotomic-character
  - lem-local-p-adic-cyclotomic-character-is-continuous
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II, Chapter 9, Sections 9.1–9.3
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
      locator: §§9.1–9.2, Definitions 9.2.3 and 9.2.10; Lemmas 9.2.2, 9.2.6–9.2.7
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Sections II.3.1–3.3
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
verification:
  precheck: n/a
---

## Definition

Let $K/\mathbb Q_p$ be finite, fix a separable closure $K_s$, put $C_p=\widehat{K_s}$, and let $\mathcal O_{C_p}$ be its valuation ring. Define the tilt
$$R:=\mathcal O_{C_p}^{\flat}=\varprojlim_{x\mapsto x^p}\mathcal O_{C_p}/p$$
with coordinatewise multiplication and the inverse-limit addition; it is a perfect characteristic-$p$ valuation domain. For $x\in R$, write $x^{\sharp}$ for the limit of the $p^n$th powers of compatible lifts of its $n$th coordinates; extend $\sharp$ to $\operatorname{Frac}(R)$, and define $v_R(x)=v_p(x^{\sharp})$, whose value group is $\mathbb Q$. Let $A_{\inf}=W_p(R)$ be its ring of $p$-typical Witt vectors. The Fontaine map $\theta:A_{\inf}\to\mathcal O_{C_p}$ is the continuous surjective ring homomorphism determined on Teichmüller representatives by $\theta([x])=x^{\sharp}$. Let $A_{\mathrm{cris}}^0$ be the subring of $A_{\inf}[1/p]$ generated over $A_{\inf}$ by $\alpha^m/m!$ for every $\alpha\in\ker(\theta)$ and every $m\ge1$, and let $A_{\mathrm{cris}}$ be its $p$-adic completion. Put
$$B_{\mathrm{cris}}^+:=A_{\mathrm{cris}}[1/p],\qquad B_{\mathrm{cris}}:=B_{\mathrm{cris}}^+[1/t].$$
Choose a compatible system $\epsilon=(1,\zeta_p,\zeta_{p^2},\ldots)\in R$ of $p$-power roots of unity and set $t=\log([\epsilon])$. The Galois action on $R$ induces actions on these rings; the Witt Frobenius induces an injective $\varphi$ with $\varphi(t)=pt$, and $g(t)=\chi_p(g)t$ for $g\in G_K$.

Let $B_{\mathrm{dR}}^+$ be the $\ker(\theta)$-adic completion of $A_{\inf}[1/p]$, put $B_{\mathrm{dR}}=B_{\mathrm{dR}}^+[1/t]$, and define its decreasing filtration by $\operatorname{Fil}^iB_{\mathrm{dR}}=t^iB_{\mathrm{dR}}^+$ for every $i\in\mathbb Z$. The natural embedding $B_{\mathrm{cris}}\hookrightarrow B_{\mathrm{dR}}$ gives $B_{\mathrm{cris}}$ the induced filtration.

Let $k$ be the residue field of $K$ and $K_0=W_p(k)[1/p]$, with Frobenius $\sigma$ induced by the Witt Frobenius. Write $\bar k$ for the residue field of $C_p$ (an algebraic closure of $k$), also identified with the residue field of $R$, with its canonical constant-field embedding into $R$. For a unit $u\in R^\times$, write $u=\omega(\bar u)u_1$ with $\bar u\in\bar k^\times$, where $\omega:\bar k\hookrightarrow R$ is that constant-field section and $u_1\in1+\mathfrak m_R$. The canonical $G_K$-equivariant homomorphism $\lambda:R^\times\to B_{\mathrm{cris}}^+$ is trivial on $\omega(\bar k^\times)$ and sends $u_1$ to
$$\log_{\mathrm{cris}}([u_1])=\sum_{n\ge1}(-1)^{n+1}\frac{([u_1]-1)^n}{n},$$
which converges in $B_{\mathrm{cris}}^+$ by the divided-power construction. For an abelian group $\Gamma$, write $\operatorname{Sym}_{\mathbb Q}(\Gamma):=\operatorname{Sym}_{\mathbb Q}(\mathbb Q\otimes_{\mathbb Z}\Gamma)$. Define
$$B_{\mathrm{st}}^+:=\operatorname{Sym}_{\mathbb Q}(\operatorname{Frac}(R)^\times)\otimes_{\operatorname{Sym}_{\mathbb Q}(R^\times)}B_{\mathrm{cris}}^+,\qquad B_{\mathrm{st}}:=B_{\mathrm{st}}^+[1/t],$$
where $\operatorname{Sym}_{\mathbb Q}(R^\times)\to B_{\mathrm{cris}}^+$ is induced by $\lambda$ and the $G_K$-action is induced by its action on $R$. The canonical map $\lambda_{\mathrm{st}}:\operatorname{Frac}(R)^\times\to B_{\mathrm{st}}^+$ sends $y$ to its degree-one generator. Choosing any $y$ with $v_R(y)\ne0$ gives a polynomial coordinate $X=\lambda_{\mathrm{st}}(y)$ and $B_{\mathrm{st}}=B_{\mathrm{cris}}[X]$. Define $N$ as the unique $B_{\mathrm{cris}}$-linear derivation with $N(\lambda_{\mathrm{st}}(y))=v_R(y)$ for all $y\in\operatorname{Frac}(R)^\times$; in the coordinate $X$ it is $v_R(y)\,d/dX$. Extend $\varphi$ by $\varphi(\lambda_{\mathrm{st}}(y))=p\lambda_{\mathrm{st}}(y)$. These definitions are independent of the auxiliary polynomial coordinate; the $G_K$-action commutes with $\varphi$ and $N$, $N\varphi=p\varphi N$, and $B_{\mathrm{cris}}=B_{\mathrm{st}}^{N=0}$. The branch-dependent $G_K$-equivariant $B_{\mathrm{cris}}$-algebra map $\iota_{\log_K}:B_{\mathrm{st}}\to B_{\mathrm{dR}}$ extends $B_{\mathrm{cris}}\hookrightarrow B_{\mathrm{dR}}$ and is the unique extension of the homomorphism on $\operatorname{Frac}(R)^\times$ that on generators $y$ with $y^\sharp\in K^\times$ sends $\lambda_{\mathrm{st}}(y)$ to $\log_{\mathrm{dR}}([y]/y^\sharp)+\log_K(y^\sharp)$. Here $[y]$ is the multiplicative extension of the Teichmüller map, $\log_{\mathrm{dR}}$ is the power-series logarithm on $1+\ker(\theta)$, and $\log_K:K^\times\to K$ extends the canonical logarithm on $\mathcal O_K^\times$, kills Teichmüller lifts of $k^\times$, and is normalized by $\log_K(p)=0$. The image of this embedding is canonical but the map depends on the branch, so the induced filtration on $B_{\mathrm{st}}$ is branch-dependent.

## Remaining local proof obligations

The Witt-coordinate construction and perfect-base Frobenius are separate local suppliers. They do not establish the tilt valuation and its residue-field identification, the sharp map, Fontaine’s map, the period completions and logarithmic convergence, or the comparison embeddings and invariant calculations asserted here. Those construction and well-definedness obligations remain held. The residue-unit factorization above uses the algebraic closure $\bar k$, rather than only the finite residue field $k$ of $K$; the constant-field section is part of the still-held tilt construction. The compatible roots of unity are supplied auxiliary data here; no choice-free construction of that system or of an algebraic closure is inferred from the choice-free Witt lemmas.

## Definition references

[[def-absolute-galois-group-of-a-local-field]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-p-typical-witt-vectors-of-a-perfect-field]]

[[def-p-typical-witt-vectors-of-a-perfect-ring]]

[[def-local-p-adic-cyclotomic-character]]

[[lem-local-p-adic-cyclotomic-character-is-continuous]]

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part II, Chapter 9, §§9.1–9.3](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, *An Introduction to the Theory of p-adic Representations*, §§II.3.1–3.3](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)
