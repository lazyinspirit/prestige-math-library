---
id: ex-highest-components-in-a-small-type-a-two-tensor-crystal
kind: example
title: "Highest components in the $A_2$ tensor crystal $B(\\lambda_1)\\otimes B(\\lambda_1)$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-highest-weight-components-in-a-tensor-product-crystal, lem-crystal-tensor-product-weight-epsilon-and-phi-formulas, def-tensor-product-of-crystals, def-crystal-graph-epsilon-phi-and-weight, def-kashiwara-lattices-lambda-and-infinity, def-kashiwara-crystal-operators, def-symmetrizable-cartan-datum-for-a-quantum-group, thm-integrable-quantum-highest-weight-module-exists-and-is-unique, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 11
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed p. 333, Example 13.3.0.21: the crystal of the standard representation of $\\mathfrak{sl}(3)$ ('terribly simple': $\\bullet\\to\\bullet\\to\\bullet$), its tensor square with the two components, and the decompositions $V^{\\otimes2}=S^2(V)\\oplus\\Lambda^2(V)$, $V\\otimes V^*=\\mathfrak{sl}(3)\\oplus1$."
    - title: "Sami Assaf, Anne Dranowski and Nicolle Gonzalez, Extremal tensor products of Demazure crystals, arXiv:2210.10236"
      url: "https://arxiv.org/pdf/2210.10236"
      locator: "§5, Theorem 5.1 and the tensor product data: $B(\\lambda)\\otimes B(\\mu)$ is a crystal for $V(\\lambda)\\otimes V(\\mu)$, so the components record the simple constituents."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§5, printed pp. 19-22, Theorem 5.2: the two-case rule used for the vertex-by-vertex check in step 3.1."
---

## Example

Let $\mathfrak g=\mathfrak{sl}_3$ with simple roots $\alpha_1=2\lambda_1-\lambda_2$, $\alpha_2=-\lambda_1+2\lambda_2$ and $\langle h_i,\lambda_j\rangle=\delta_{ij}$. The three-dimensional simple module $V(\lambda_1)$ has crystal $B(\lambda_1)=\{u_1,u_2,u_3\}$ with weights $\lambda_1,\ \lambda_2-\lambda_1,\ -\lambda_2$ and arrows $u_1\xrightarrow{1}u_2\xrightarrow{2}u_3$; its only nonzero $\varepsilon$-values are $\varepsilon_1(u_2)=1,\ \varepsilon_2(u_3)=1$, and $\varphi_i(b)=\varepsilon_i(b)+\langle h_i,wt(b)\rangle$.

In the tensor crystal $B(\lambda_1)\otimes B(\lambda_1)$ of [[def-tensor-product-of-crystals]] the criterion of [[thm-highest-weight-components-in-a-tensor-product-crystal]](a) applies. A vertex $b_1\otimes b_2$ is highest exactly when $\varepsilon_i(b_1)=0$ for $i=1,2$ and $\varepsilon_i(b_2)\le\langle h_i,wt(b_1)\rangle$ for $i=1,2$. Since $\varepsilon_1(u_2)=1$ and $\varepsilon_2(u_3)=1$, only $b_1=u_1$ can occur, so the highest vertices are

$$u_1\otimes u_1\quad(\text{weight }2\lambda_1),\qquad u_1\otimes u_2\quad(\text{weight }\lambda_2),$$

the second because $\varepsilon_1(u_2)=1\le\langle h_1,wt(u_1)\rangle=1$ and $\varepsilon_2(u_2)=0\le\langle h_2,wt(u_1)\rangle=0$, while $u_1\otimes u_3$ fails since $\varepsilon_2(u_3)=1>\langle h_2,wt(u_1)\rangle=0$. By [[thm-highest-weight-components-in-a-tensor-product-crystal]](b) the two generated components are the highest weight crystals $B(2\lambda_1)$ and $B(\lambda_2)$, so the nine vertices split as $B(\lambda_1)\otimes B(\lambda_1)=B(2\lambda_1)\sqcup B(\lambda_2)$, matching $V(\lambda_1)\otimes V(\lambda_1)=V(2\lambda_1)\oplus V(\lambda_2)$ with dimensions $9=6+3$.

## Facts & Assumptions

**Given:** $\mathfrak g=\mathfrak{sl}_3$ with the Cartan datum of [[def-symmetrizable-cartan-datum-for-a-quantum-group]] determined by $\langle h_i,\alpha_j\rangle=a_{ij}$, $\alpha_1=2\lambda_1-\lambda_2$, $\alpha_2=-\lambda_1+2\lambda_2$, $\langle h_i,\lambda_j\rangle=\delta_{ij}$; the three-element crystal $B(\lambda_1)=\{u_1,u_2,u_3\}$ with the arrows $u_1\xrightarrow{1}u_2\xrightarrow{2}u_3$ and the tensor product crystal $B(\lambda_1)\otimes B(\lambda_1)$ of [[def-tensor-product-of-crystals]].

[F1] The standard crystal ([[def-kashiwara-lattices-lambda-and-infinity]], [[def-kashiwara-crystal-operators]], [[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]): $V(\lambda_1)$ is the three-dimensional integrable simple with highest weight vector of weight $\lambda_1$, and its crystal is $B(\lambda_1)=\{u_1,u_2,u_3\}$ with weights $\lambda_1,\lambda_2-\lambda_1,-\lambda_2$ and arrows $u_1\xrightarrow{1}u_2\xrightarrow{2}u_3$.

[F2] Crystal graph conventions ([[def-crystal-graph-epsilon-phi-and-weight]]): $\varepsilon_i(u)=\max\{n:\tilde e_i^{\,n}u\ne0\}$ and $\varphi_i(u)=\varepsilon_i(u)+\langle h_i,wt(u)\rangle$.

[F3] The highest-vertex criterion ([[thm-highest-weight-components-in-a-tensor-product-crystal]])(a): $b_1\otimes b_2$ is a highest vertex if and only if $\varepsilon_i(b_1)=0$ and $\varepsilon_i(b_2)\le\langle h_i,wt(b_1)\rangle$ for all $i$; and (b) the component $F(b_1\otimes b_2)$ of such a vertex of weight $\lambda$ is the canonical crystal $B(\lambda)$.

[F4] The tensor $\varepsilon/\varphi$ formulas and the two-case rule ([[lem-crystal-tensor-product-weight-epsilon-and-phi-formulas]], [[def-tensor-product-of-crystals]]) used for the explicit vertex check.

[F5] The axiom of choice ([[def-axiom-of-choice]]), inherited through [F3] where it is declared.

## Verification

**Proof technique:** direct.

1.1 Compute $\varepsilon_i$ of the three standard vertices from the arrows of $B(\lambda_1)$ read as a crystal of the standard module: $\tilde e_1u_2=u_1$, $\tilde e_1u_1=0$, $\tilde e_1u_3=0$ and $\tilde e_2u_3=u_2$, $\tilde e_2u_2=\tilde e_2u_1=0$, so $\varepsilon_1=(0,1,0)$ and $\varepsilon_2=(0,0,1)$ at $(u_1,u_2,u_3)$; the weights are $\lambda_1,\lambda_2-\lambda_1,-\lambda_2$ as stated. [given, F1, F2]

2.1 Apply the highest-vertex criterion [F3]: $\varepsilon_1(b_1)=0$ forces $b_1\ne u_2$ and $\varepsilon_2(b_1)=0$ forces $b_1\ne u_3$, so $b_1=u_1$; then $\varepsilon_1(b_2)\le\langle h_1,\lambda_1\rangle=1$ always holds and $\varepsilon_2(b_2)\le\langle h_2,\lambda_1\rangle=0$ forces $b_2\ne u_3$. Hence the highest vertices are $u_1\otimes u_1$ and $u_1\otimes u_2$, of weights $2\lambda_1$ and $\lambda_1+(\lambda_2-\lambda_1)=\lambda_2$, both dominant. [step 1.1, F3, algebra]

2.2 Verify by the two-case rule that $u_1\otimes u_3$ is not highest: $\varphi_2(u_1)=\langle h_2,wt(u_1)\rangle=0<1=\varepsilon_2(u_3)$ by [F2], so $\tilde e_2$ acts on the second factor and $\tilde e_2(u_1\otimes u_3)=u_1\otimes u_2\ne0$. [step 1.1, F2, F4, algebra]

3.1 By [F3](b) the component of $u_1\otimes u_1$ is isomorphic to $B(2\lambda_1)$ and that of $u_1\otimes u_2$ to $B(\lambda_2)$; since the theorem identifies the components of the tensor crystal with the simple constituents of $V(\lambda_1)\otimes V(\lambda_1)$ and $9=6+3$, the two components exhaust the nine vertices. [step 2.1, step 2.2, F3]

4.1 Cross-check with the source computation: the tensor square of the standard representation of $\mathfrak{sl}_3$ decomposes as $V(2\lambda_1)\oplus V(\lambda_2)$ (symmetric square plus exterior square), and the two highest vertices found are exactly the highest vectors of these summands; this is the computation drawn in the source. [step 3.1]

5.1 Choice: clause (a) of the criterion is a finite computation; the identification in step 3.1 uses the uniqueness theorem, whose axiom of choice is declared in this item through [F5] and used only as in its own contract. [step 3.1, F5, given] ∎
