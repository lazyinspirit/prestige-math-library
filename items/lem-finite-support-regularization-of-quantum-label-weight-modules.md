---
id: lem-finite-support-regularization-of-quantum-label-weight-modules
kind: lemma
title: "Finite-support regularization of quantum label-weight modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-drinfeld-jimbo-quantized-enveloping-algebra, def-free-abelian-group, def-quantum-weight-module-and-integrability, def-realization-of-a-generalized-cartan-matrix, def-symmetrizable-cartan-datum-for-a-quantum-group, prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra, thm-serre-presentation-of-a-kac-moody-algebra]
justified_by: []
aliases: []
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed pp. 3-4, Definition 1.1: the Borcherds-Cartan datum with the nondegenerate form, integral fundamental weights and the explicit realization $P^\\vee=(\\oplus_i\\mathbb Zh_i)\\oplus(\\oplus_i\\mathbb Zd_i)$; §2, printed pp. 7-8 for the module categories."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 2, §2.1-2.2 for the root-data conventions; Ch. 33, §33.1.2-33.1.3, printed pp. 258-260 for the comparison of weight multiplicities."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.2.1, printed pp. 316-317: the finite-weight-support lattice constructions and the classical character comparison."
---

## Statement

Let $(I,A,D,P,P^{\vee},q)$ be a symmetrizable Cartan datum with $a_{ii}=2$ for
all $i$ ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]) and let $M$ be a
$P$-graded type-one quantum weight module
([[def-quantum-weight-module-and-integrability]]) whose support is contained in
a finite union of cones,

$$\operatorname{supp}M\subseteq\bigcup_{j=1}^{s}(\lambda_j-Q_+)\qquad(\lambda_1,\dots,\lambda_s\in P),$$

where $Q_+=\bigoplus_i\mathbb Z_{\ge0}\alpha_i$. Choose a finite free direct
coordinate summand $X_f\subseteq P$ (with respect to a free basis of $P$,
[[def-free-abelian-group]]) containing all $\lambda_j$ and all $\alpha_i$, and
set

$$Y_{\mathrm{aux}}:=\Bigl(\bigoplus_{i\in I}\mathbb ZH_i\Bigr)\oplus\operatorname{Hom}(X_f,\mathbb Z),\qquad X_{\mathrm{aux}}:=\operatorname{Hom}(Y_{\mathrm{aux}},\mathbb Z),$$

with the evaluation pairing $X_{\mathrm{aux}}\times Y_{\mathrm{aux}}\to\mathbb Z$.
Define $j\colon X_f\to X_{\mathrm{aux}}$ by $j(x)(H_i):=\langle x,h_i\rangle$ and
$j(x)(f):=f(x)$ for $f\in\operatorname{Hom}(X_f,\mathbb Z)$, and put
$\alpha_i^{\mathrm{aux}}:=j(\alpha_i)$. Then:

(i) $(I,A,D,X_{\mathrm{aux}},Y_{\mathrm{aux}},q)$ with the simple roots
$\alpha_i^{\mathrm{aux}}$ and simple coroots $H_i$ is a symmetrizable Cartan
datum for a quantum group with the same generalized Cartan matrix $A$ and the
same symmetrizer $D$; its pairing is perfect, the $\alpha_i^{\mathrm{aux}}$ are
linearly independent, the $H_i$ are primitive and independent, and integral
fundamental weights $\Lambda_j$ ($\Lambda_j(H_i)=\delta_{ij}$) exist. Here
$\langle\alpha_j^{\mathrm{aux}},H_i\rangle=a_{ij}$ is the original convention
([[def-realization-of-a-generalized-cartan-matrix]],
[[prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism]]).

(ii) Fix the transported $X_{\mathrm{aux}}$-grading
$$M^{\mathrm{aux}}_{j(x)}:=M_x\quad(x\in X_f),\qquad M^{\mathrm{aux}}_{\xi}:=0\quad(\xi\notin j(X_f)),$$
so $\operatorname{supp}M^{\mathrm{aux}}\subseteq j(X_f)$. On this fixed graded
space there is a unique type-one quantum weight module structure for the
auxiliary datum retaining the original $E_i,F_i$ actions: its toral action is
$$K_{(n,f)}\ \text{acts on}\ M_x\ \text{by}\ q^{\sum_in_i\langle x,h_i\rangle+f(x)}\qquad\bigl((n,f)\in\textstyle\bigoplus_i\mathbb ZH_i\oplus\operatorname{Hom}(X_f,\mathbb Z)\bigr),$$
with the actions of $E_i$, $F_i$ and of the simple coroots
$K_{d_iH_i}$ unchanged. In particular the old $K_h$ action is recovered from
the label $x$ as $q^{\langle x,h\rangle}$, and the old and auxiliary $E_i,F_i$
actions agree.
Uniqueness is asserted for this transported grading; the original toral action
alone need not determine the labels when the original pairing is not separating.

(iii) The two recipes are inverse on objects and grading-preserving morphisms:
on $U_q(\mathfrak g)$-modules with labels in $X_f$ and support as above, the
identity on underlying vector spaces is an equivalence between the category of
$P$-graded type-one modules and the corresponding full subcategory of
$X_{\mathrm{aux}}$-graded type-one modules with labels in $j(X_f)$. This is not
an embedding of the old torus algebra into the new one and is asserted only
inside this finite-support category.

(iv) The construction applies simultaneously to Verma modules and highest weight
modules (supported in $\lambda-Q_+$) and to finite tensor products of such
modules (labels add), by choosing one $X_f$ containing all participating upper
weights and all simple roots; the tensor-product $E_i,F_i$ formulas of [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]] are unchanged because only the diagonal toral characters change.

(v) Rationally, $h_{\mathrm{aux}}:=Y_{\mathrm{aux}}\otimes_{\mathbb Z}\mathbb Q$
decomposes as $h_{\mathrm{aux}}=H_{\min}\oplus Z$, where $H_{\min}$ is a
minimal realization of $A$ (of dimension $2n-r$, $n=|I|$, $r=\operatorname{rank}A$)
and $Z\subseteq\ker\alpha$ is a complement on which all $\alpha_i^{\mathrm{aux}}$
vanish. After extension to $\mathbb C$, $H_{\min}\otimes\mathbb C$ is a
minimal realization in the sense of
[[prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism]], and the
extended Cartan–Serre algebra is $\mathfrak g(H_{\min}\otimes\mathbb C)\oplus
(Z\otimes\mathbb C)$. For a classical highest weight module with highest
weight $\xi$, the central summand acts by $\xi|_Z$; restriction to the minimal
realization preserves its submodules and its weight multiplicities, with
$\xi-\nu$ indexed by the same $\nu\in Q_+$.

## Facts & Assumptions

**Given:** A symmetrizable Cartan datum with $a_{ii}=2$, a $P$-graded type-one module $M$ with $\operatorname{supp}M\subseteq\bigcup_j(\lambda_j-Q_+)$, and a finite free direct summand $X_f\subseteq P$ containing the $\lambda_j$ and $\alpha_i$.

[F1] $P$ is a free abelian group; a subgroup spanned by a finite subset of a free basis is itself free and a direct summand of $P$, with complementary summand spanned by the remaining basis elements ([[def-free-abelian-group]], [[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F2] For a finite free abelian group $X$ the evaluation map $X\to\operatorname{Hom}(\operatorname{Hom}(X,\mathbb Z),\mathbb Z)$, $x\mapsto(f\mapsto f(x))$, is an isomorphism; for finite free $Y$ the pairing $\operatorname{Hom}(Y,\mathbb Z)\times Y\to\mathbb Z$ is perfect ([[def-free-abelian-group]]).

[F3] The defining relations of the Drinfeld–Jimbo algebra with respect to any Cartan datum are the toral, toral-action, mixed and quantum Serre relations ([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F4] In the original datum, $M$ is type one: $K_h$ acts on $M_x$ by $q^{\langle x,h\rangle}$, $E_iM_x\subseteq M_{x+\alpha_i}$ and $F_iM_x\subseteq M_{x-\alpha_i}$; the labels $x$ with $M_x\ne0$ lie in $X_f$ because every weight of $M$ is $\lambda_j-\nu$ with $\nu\in Q_+$ ([[def-quantum-weight-module-and-integrability]]).

[F5] Over $\mathbb C$, the algebra for a minimal realization of a finite symmetrizable GCM has the Cartan relations and both Serre families as its presentation ([[thm-serre-presentation-of-a-kac-moody-algebra]]).

## Verification

**Proof technique:** build the auxiliary finite-rank datum by dualizing a finite coordinate summand of $P$, transport the grading and the toral action labelwise, verify the defining relations of the auxiliary datum, and finish with the rational minimal-realization decomposition.

1.1 Choosing a free basis of $P$, let $S$ be the finite set of basis elements occurring in the finitely many elements $\lambda_j,\alpha_i$, and put $X_f:=\bigoplus_{s\in S}\mathbb Ze_s$. Then $X_f$ is free of finite rank, contains all $\lambda_j$ and $\alpha_i$, and $P=X_f\oplus X_f'$ for the summand $X_f'$ spanned by the remaining basis elements, by [F1]. Consequently $X_f$ contains the whole support of $M$: every weight is some $\lambda_j-\nu$ with $\nu\in\bigoplus_i\mathbb Z_{\ge0}\alpha_i$ by [F4], and both $\lambda_j$ and the $\alpha_i$ lie in $X_f$. [given, F1, F4, construct]

2.1 By [F2] the evaluation pairing $X_{\mathrm{aux}}\times Y_{\mathrm{aux}}$ is perfect, and the map $j$ is an isomorphism of $X_f$ onto the subgroup $\{j(x)\}$ of $X_{\mathrm{aux}}$; hence $j$ is injective, so the $\alpha_i^{\mathrm{aux}}=j(\alpha_i)$ are linearly independent (as the $\alpha_i$ are, [[def-symmetrizable-cartan-datum-for-a-quantum-group]]). The $H_i$ are basis elements of the first summand, hence independent and primitive. For all $i,j$, $\langle\alpha_j^{\mathrm{aux}},H_i\rangle=j(\alpha_j)(H_i)=\langle\alpha_j,h_i\rangle=a_{ij}$ by the row convention of the datum, and $j(\alpha_j)(f)=f(\alpha_j)$ on the second summand; hence the generalized Cartan matrix of the auxiliary datum is $A$ and the symmetrizer $D$ still satisfies $d_ia_{ij}=d_ja_{ji}$. The elements $\Lambda_j\in X_{\mathrm{aux}}$ with $\Lambda_j(H_i)=\delta_{ij}$ and $\Lambda_j|_{\operatorname{Hom}(X_f,\mathbb Z)}=0$ are well-defined fundamental weights. Thus (i) holds. [step 1.1, F2, algebra]

3.1 Transport of the module: grade $M^{\mathrm{aux}}$ by $X_{\mathrm{aux}}$ as in (ii) and let $K_{(n,f)}$ act on $M_x$ by the scalar $q^{\sum_in_i\langle x,h_i\rangle+f(x)}$, while $E_i,F_i$ act as before. This is well defined because $P=X_f\oplus X_f'$ and $M$ has no labels outside $X_f$ by step 1.1, so $M=\bigoplus_{x\in X_f}M_x$. The toral relations hold because the scalars multiply ($q^{a}q^{b}=q^{a+b}$ and $K_{(0,0)}$ acts by $1$). For the toral-action relations, $K_{(n,f)}E_jK_{(n,f)}^{-1}$ acts on $M_x$ by $q^{\sum_in_i\langle x+\alpha_j,h_i\rangle+f(x+\alpha_j)-\sum_in_i\langle x,h_i\rangle-f(x)}=q^{\sum_in_i\langle\alpha_j,h_i\rangle+f(\alpha_j)}=q^{\langle\alpha_j^{\mathrm{aux}},(n,f)\rangle}$, which is the required scalar; the $F_j$-variant has the opposite sign. The mixed relation holds because its toral part involves only $K_{d_iH_i}$, which acts on $M_x$ by $q^{d_i\langle x,h_i\rangle}=q_i^{\langle x,h_i\rangle}$, the same scalar as the original $K_i=K_{d_ih_i}$; and both $E_i,F_i$ coincide with their original actions. The Serre relations hold because they involve only the unchanged $E_i,F_i$ and the unchanged Cartan matrix and $d_i$. Hence $M^{\mathrm{aux}}$ is a type-one module for the auxiliary datum with support in $j(X_f)$. For uniqueness on the prescribed grading, the type-one condition forces every $K_y$ to act on $M^{\mathrm{aux}}_{j(x)}=M_x$ by $q^{j(x)(y)}$; these summands span $M$, and the $E_i,F_i$ actions are fixed. Thus every generator action is determined, proving (ii). [step 2.1, F3, F4, algebra]

4.1 Converse and equivalence: given an $X_{\mathrm{aux}}$-graded type-one module $N$ with labels in $j(X_f)$ (i.e. $N_\xi=0$ for $\xi\notin j(X_f)$), define $N^{\mathrm{old}}$ with the same underlying vector spaces and $N^{\mathrm{old}}_x:=N_{j(x)}$ for $x\in X_f$; the actions of $E_i,F_i$ are kept, and $K_h$ acts on $N^{\mathrm{old}}_x$ by $q^{\langle j(x),h\rangle}$ where $\langle j(x),h\rangle:=\langle x,h\rangle$ — well defined since $j$ is injective by step 2.1. These two assignments are inverse on objects; on morphisms both are the identity map on underlying $\mathbb Q(q)$-linear maps, and a map preserving one grading preserves the other because $j$ is a bijection $X_f\to j(X_f)$ fixing the $E_i,F_i$ actions. This proves (iii). The construction is not an algebra embedding of tori: $\operatorname{Hom}(X_f,\mathbb Z)$ may be nonzero, and its elements act as new labels with no preimage in $P$; the equivalence is only between the stated module categories with labels in $j(X_f)$. [step 2.1, step 3.1, algebra]

5.1 Simultaneity: for a Verma module or highest weight module of highest weight $\lambda$ the support lies in $\lambda-Q_+$, and for a finite tensor product of such modules the labels are sums of labels, hence lie in $\sum_k(\lambda^{(k)}-Q_+)\subseteq(\sum_k\lambda^{(k)})-Q_+$; therefore one finite set $\{\lambda_j\}$ (the participating upper weights) and one $X_f$ containing them and all $\alpha_i$ cover all modules under consideration. Under the coproduct the $E_i$- and $F_i$-components are unchanged ($\Delta(E_i)=E_i\otimes K_i^{-1}+1\otimes E_i$ and $\Delta(F_i)=F_i\otimes1+K_i\otimes F_i$ of [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]), and the toral factors act by the auxiliary characters on both tensor factors, so the auxiliary structure on a tensor product is the tensor product of the auxiliary structures; the collection of such constructions is therefore compatible. This proves (iv). [step 3.1, step 4.1, F3, algebra]

6.1 Rational decomposition: let $h_{\mathrm{aux}}=Y_{\mathrm{aux}}\otimes\mathbb Q$, so $\dim h_{\mathrm{aux}}=n+\operatorname{rank}X_f$, and let $\alpha\colon h_{\mathrm{aux}}\to\mathbb Q^I$ be the evaluation $\alpha(y)_i=\langle\alpha_i^{\mathrm{aux}},y\rangle$. It is surjective because the $\alpha_i^{\mathrm{aux}}$ are linearly independent and the pairing is perfect; its restriction to $\operatorname{span}_{\mathbb Q}\{H_i\}$ has rank $r=\operatorname{rank}A$ (the matrix $(\langle\alpha_j,H_i\rangle)=(a_{ij})$). Choose $n-r$ rational directions in $h_{\mathrm{aux}}$ whose images under $\alpha$ supplement the image of $\operatorname{span}\{H_i\}$, and let $H_{\min}$ be the span of these directions together with the $n$ independent $H_i$; then $\dim H_{\min}=n+(n-r)=2n-r$ and the coroots $H_i$ together with the chosen directions form a basis of $H_{\min}$ on which $\alpha$ has rank $n$, so after extension to $\mathbb C$, $H_{\min}\otimes\mathbb C$ is a minimal realization of $A$ in the sense of [[def-realization-of-a-generalized-cartan-matrix]] and [[prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism]]. Inside $\ker\alpha$ choose a linear complement $Z$ to $H_{\min}\cap\ker\alpha$; then $h_{\mathrm{aux}}=H_{\min}\oplus Z$ by construction, and $\alpha|_Z=0$, so all simple roots vanish on $Z$ and the corresponding generators are central. This proves the rational decomposition. [step 2.1, step 5.1, F2, algebra]

7.1 Classical comparison. By [F5], adjoining $Z\otimes\mathbb C$ to the minimal Cartan introduces only central generators: all simple roots vanish there and all coroots belong to $H_{\min}$. Mapping these generators to the two summands of $\mathfrak g(H_{\min}\otimes\mathbb C)\oplus(Z\otimes\mathbb C)$, and mapping back the minimal generators and $Z$, gives mutually inverse Lie homomorphisms, since every Cartan and Serre relation is respected. In a cyclic highest weight module with highest vector $v_\xi$, centrality gives $z(av_\xi)=a(zv_\xi)=\xi(z)av_\xi$ for every $z\in Z$, so a subspace is a submodule for the extended algebra exactly when it is one for the minimal algebra. Moreover the restrictions $\alpha_i^{\mathrm{aux}}|_{H_{\min}}$ are independent by step 6.1. Thus different weights $\xi-\nu$ in this one highest-weight cone remain different on $H_{\min}$, while their values on $Z$ are all $\xi|_Z$; their weight spaces, and hence multiplicities, are unchanged. In particular restriction identifies the Verma module and its simple highest weight quotient with their minimal-realization counterparts, preserving integrability. This proves (v); the minimal-realization proposition supplies only realization isomorphisms, and the multiplicity comparison is the argument here. [step 6.1, F5, algebra] ∎
