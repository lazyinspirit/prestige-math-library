---
id: def-the-bar-lattice-and-integral-lattice-of-a-based-module
kind: definition
title: "The bar lattice and the divided-power integral lattice of a based module"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-integrable-quantum-highest-weight-module-exists-and-is-unique, def-lusztig-divided-power-integral-form, def-the-local-ring-at-q-zero, lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality, def-kashiwara-lattices-lambda-and-infinity, thm-grand-loop-existence-of-highest-weight-crystal-bases]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§6.1, printed pp. 507–509 (PDF pp. 43–45): the integral form $U_{\\mathbb Z}(\\mathfrak g)$, its stable lattices $L_{\\mathbb Z}(\\infty)=U_{\\mathbb Z}^-(\\mathfrak g)\\cap L(\\infty)$; §9.2–9.3 of JKK for the rings $A_0$, $A_\\infty$, $A=\\mathbb Q[q,q^{-1}]$ and the bar (9.2)–(9.3)."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§8, printed pp. 50–51 (ring conventions and $A_0$- and $A_\\infty$-lattices) and §9 (9.2)–(9.3), printed pp. 51–52 (bar involution and its action on $V(\\lambda)$)."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§27.1.2(a)–(d), printed214/PDF223: complete exact based axioms; §§27.1.3–27.1.4 printed214–215/PDF223–224: actual based maps, subobjects and quotients. The finite-type chapter is extended only as specified by Bao–Wang§2.1/Remark2.10."
    - title: "Huancheng Bao and Weiqiang Wang, Canonical bases in tensor products revisited, arXiv:1403.0039v2"
      url: "https://arxiv.org/pdf/1403.0039"
      locator: "Complete7 pages: §2.1 exact based conditions; Lemmas2.2–2.3 and Proposition2.4 full approximate-cyclicity/integral-action proof; Proposition2.6 dual case; Theorems2.7/2.9 correction/globalization; Remark2.10 filtration extension; Remark2.14 affine universal-coefficient failure. The source explicitly does NOT prove arbitrary based-pair action integrality."
---

## Definition

Fix $A=\mathbb Z[q,q^{-1}]\subseteq\mathbb Q(q)$ and the crystal limiting ring $A_0\subseteq\mathbb Q(q)$ of [[def-the-local-ring-at-q-zero]], and put $A_\infty:=\psi(A_0)$, the image of $A_0$ under the semilinear involution $\psi(q)=q^{-1}$, i.e. the ring of rational functions regular at $q=\infty$; $A_0$ and $A_\infty$ are the rational local rings at $0$ and at infinity, and the integral affine chart coordinate rings are $\mathbb Z[q]$ and $\mathbb Z[q^{-1}]$.

Let $M$ be one of $U_q^-$ or $V(\lambda)=L(\lambda)$ for $\lambda\in P^+$. Equip $M$ with the bar involution $\psi$ of [[lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality]]: on $U_q^-$ the semilinear algebra involution with $\psi(q)=q^{-1}$, $\psi(E_i)=E_i$, $\psi(F_i)=F_i$, $\psi(K_h)=K_h^{-1}$; on $V(\lambda)$ the induced semilinear involution determined by $Pv_\lambda\mapsto\psi(P)v_\lambda$, well defined by the highest-module presentation: its negative-half kernel is $\sum_iU_q^-F_i^{\lambda(h_i)+1}$, preserved by $\psi$ because every $F_i$ is fixed ([[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]). Equivalently the full highest-vector relations are bar stable: $E_i$ is fixed, the singular divided powers are fixed, and $\psi(K_h-q^{\langle\lambda,h\rangle})=-q^{-\langle\lambda,h\rangle}K_{-h}(K_h-q^{\langle\lambda,h\rangle})$. Hence the quotient involution is compatible with the algebra action and fixes $v_\lambda$. Let $M_A\subseteq M$ be the divided-power integral form: $M_A=U_A^-$ for $M=U_q^-$, and $M_A=V_A(\lambda):=U_A^-v_\lambda$ for $M=V(\lambda)$ ([[def-lusztig-divided-power-integral-form]]); both are $\psi$-stable. Let $L$ be the Kashiwara crystal lattice of $M$ over $A_0$: $L=\mathcal L(\infty)$ for $U_q^-$ and $L=\mathcal L(\lambda)$ for $V(\lambda)$ ([[def-kashiwara-lattices-lambda-and-infinity]], [[thm-grand-loop-existence-of-highest-weight-crystal-bases]]).

Define the **bar lattice** $L^-:=\psi(L)$, an $A_\infty$-submodule of $M$, and the **balanced part** $E:=M_A\cap L\cap L^-$.

The definition keeps three structures on the same $\mathbb Q(q)$-vector space strictly separate: the $A$-module $M_A$, which is not assumed free and not claimed to be contained in $L$; the free $A_0$-module $L$; and the free $A_\infty$-module $L^-$. No equality $L^-=L$, no inclusion $M_A\subseteq L$, no freeness of $M_A$ and no identification $E=M_A$ are asserted; freeness is a conclusion of the balanced-triple construction on this page, whereas $E$ is a $\mathbb Z$-module of global lifts and is not equal to the Laurent lattice $M_A$. The bar lattice is not the form-dual (upper) lattice, which is defined later on this page. The intersections $M_A\cap L$ and $M_A\cap L^-$ are respectively $\mathbb Z[q]$- and $\mathbb Z[q^{-1}]$-modules, generally not $A$-modules. The balanced part $E$ is a $\mathbb Z$-module; its Laurent extension $A\otimes_{\mathbb Z}E$ is the full integral module once globalization is proved.

More generally a **based integrable module** $(M,B)$ here means exactly: $B$ is a homogeneous field basis; $M_A=\bigoplus_bAb$ is $U_A$-stable; the semilinear involution fixing $B$ is compatible with the algebra action; and $L_0=\bigoplus_bA_0b$ with residue $B$ is a crystal local basis at $0$. These are the four conditions of Lusztig 27.1.2(a)–(d) after the transport $v=q^{-1}$, together with the integrable extension used by Bao–Wang. Such data do not automatically imply an integral $\Theta$-action on an arbitrary based pair. A **based subobject** is a $U$-submodule spanned by a subset of $B$; a **based quotient** is its quotient with the complementary basis images. Based morphisms send $B$ to the target basis or to $0$, and have kernels spanned by the killed basis subset. These exact integral and bar-compatible maps, not arbitrary field summands, are used in tensor inheritance.

