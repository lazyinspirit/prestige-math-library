---
id: lem-klr-projective-duality-and-positive-divided-string-leading-terms
kind: lemma
title: "Self-dual KLR projectives have positive first-block divided-string leading terms"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head, def-divided-power-klr-idempotents-and-projectives, def-the-klr-cartan-pairing, thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives, thm-klr-categorification-of-the-negative-quantum-half, thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis, thm-the-highest-weight-crystal-triple-is-balanced, def-axiom-of-choice, lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]
justified_by: []
aliases: []
landmark: false
dependency_level: 15
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Khovanov and Lauda, A diagrammatic approach to categorification of quantum groups I, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: '§2.5 projective $^\#$ and vector duality; §3.2, PDF pp. 44-45 character separation, duality and parity. Local algebraic sign/string argument expanded using the current quantum-half general integral adapted ideals.'
    - title: 'Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991) 465-516'
      url: 'https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf'
      locator: '§6-§7: simultaneous balanced globalization and the adapted string recursion used for the sign comparison.'
---

## Statement

For any graded KLR datum in this page and any field $k$, each finite-dimensional graded simple shift orbit has a unique representative $S_b$ self-dual for $D(M)_d=\operatorname{Hom}_k(M_{-d},k)$ with action $(af)(m)=f(\psi(a)m)$. Its projective cover $P_b$, normalized by $\operatorname{Hom}^0(P_b,S_b)=k$, satisfies $P_b^\#=P_b$ for $P^\#=\operatorname{HOM}_R(P,R)^\psi$. These are unique normalizations. Induction of two self-dual finite projectives is self-dual. If $\epsilon_i^L(S_b)=r>0$ and $\Delta_i^{(L,r)}S_b=L(i^r)\boxtimes S_a$ with $\epsilon_i^L(S_a)=0$, normalized as above, then
$$[P_{i,r}][P_a]=[P_b]+\sum_{\epsilon_i^L(S_c)>r}m_c(q)[P_c],$$
with $m_c\in\mathbb{N}[q,q^{-1}]$ each invariant under $q\mapsto q^{-1}$. Under $\gamma$ the integral LEFT divided-string ideal $I_{(i,\ge n)}=\sum_{r\ge n}F_i^{(r)}U_A^-$ is the $A$-span of $[P_b]$ with $\epsilon_i^L(S_b)\ge n$. Consequently, if the normalized projective classes are known to be a SIGNED lower-global set, this leading coefficient $1$ identifies them with the POSITIVE lower-global set using the general adapted right-string recursion; no finite-ADE canonical-comparison theorem is needed. For the conclusions compared with the quantum half and the conditional lower-global/LEFT-string recursion, carry the inherited Axiom of Choice of those quantum suppliers; the generic finite module duality/parity/Frobenius arguments themselves are choice-free.

## Facts & Assumptions

**Given:** A graded KLR datum over any field $k$, the graded simple modules and projective covers of [[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]] with the maximal-tail triangular basis and absolute simplicity of [[lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head]], the duality $P^\#$ and pairing of [[def-the-klr-cartan-pairing]], and the isomorphism $\gamma$ of [[thm-klr-categorification-of-the-negative-quantum-half]].

[F1] Maximal-tail basis ([[lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head]]): there is a finite triangular $A$-matrix of divided-idempotent Homs against simples with diagonal $1$, the simples are absolutely simple, and the selected divided words $Y_b$ give a triangular $A$-basis of $K_0(R(\beta))$; the identical assertions holds for maximal FIRST-colour blocks.

[F2] Divided powers ([[def-divided-power-klr-idempotents-and-projectives]]): $P_{i,n}$ is the unique indecomposable projective summand of $R(n\alpha_i)$ up to shift and $P_{i,n}^\#=P_{i,n}$; $[P_{i,n}]=\gamma(\theta_i^{(n)})$.

[F3] Categorification ([[thm-klr-categorification-of-the-negative-quantum-half]]): $\gamma$ is an isomorphism of $A$-algebras intertwining induction products with the algebra product, restriction with the coproduct, and the bar involutions, with both sides free over $A$ componentwise.

[F4] Global suppliers ([[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]], [[thm-the-highest-weight-crystal-triple-is-balanced]]): the lower global basis of the negative half and its integral balanced globalization, and the general adapted LEFT/right string recursion identifying the left-string ideal quotients with the lower global vectors, are available under the stated hypotheses.

## Proof

**Proof technique:** direct; normalize dualities by word characters, compute the first-block expansion, then compare with the integral string ideals and the global recursion.

1.1 (Self-dual simples.) The maximal-tail supplier [F1] gives a triangular divided-idempotent/simple Hom matrix with diagonal $1$ over $A=\mathbb Z[q,q^{-1}]$, which remains invertible at $q=1$. Ordinary dimensions of divided-word corners are determined by ordinary word dimensions: in each constant-colour block the nil-Hecke matrix presentation makes the polynomial column simple of rank $r!$ and the divided idempotent a rank-one matrix projection, so $\dim(e_{\text{div}}M)=\dim(e_{\text{expanded}}M)/\prod_r r!$ for every finite module $M$, including nonsemisimple central quotients. Hence ordinary word characters separate simple shift orbits. The vector duality $D(M)_d=\operatorname{Hom}_k(M_{-d},k)$ preserves simple modules and fixes ordinary word dimensions because $\psi$ fixes the word idempotents, so $DS\cong S\{s\}$ for some integer $s$. [given, F1, algebra]

2.1 (Evenness and normalization.) Choose a total colour order and set $p(\nu)=\sum_{a<b,\ \nu_a>\nu_b}b_{\nu_a\nu_b}\bmod2$. Each adjacent unequal swap changes $p$ by its crossing degree modulo $2$, and equal crossings and dots have even degree, so the PBW basis puts $e(\eta)Re(\nu)$ in degrees congruent to $p(\eta)-p(\nu)$; a graded module therefore splits into the two submodules on which $d-p(\nu)$ is fixed modulo $2$ on $e(\nu)M_d$, and a simple uses one of them. Since $-d-p(\nu)\equiv d-p(\nu)\pmod 2$, $DS$ has the same sector as $S$, so the shift $s$ above is even; replacing $S$ by $S\{s/2\}$ gives $DS=S$, and uniqueness follows because a nonzero finite-dimensional graded module is not isomorphic to a nonzero shift of itself (compare its finite least and greatest degrees). [step 1.1, algebra]

3.1 (Self-dual covers and induction.) For a finite projective $P$ and finite module $M$, evaluation gives $\operatorname{Hom}(P^\#,DM)=D\operatorname{Hom}(P,M)$ with ordinary homogeneous degrees: verify on $P=Re(\nu)\{a\}$, where both sides are the dual of the finite-dimensional space $e(\nu)M\{-a\}$ ([[def-divided-power-klr-idempotents-and-projectives]]), and restrict to a finite summand. The duality $^\#$ is an involution on finite projectives, so $P_b^\#$ is the same normalized indecomposable projective cover of $DS_b=S_b$, giving $P_b^\#=P_b$; a nonzero projective is bounded below, so the normalization is unique. If $M$ is a finite projective over the separated block algebra $B$, then $\operatorname{Hom}_R(Re\otimes_BM,R)=\operatorname{Hom}_B(M,eR)=\operatorname{Hom}_B(M,B)\otimes_BeR$ by evaluation on finite free modules and summands, and twisting by $\psi$ identifies this with $Re\otimes_BM^\#$ without reversing the horizontal block order; for $M=P_a\boxtimes P_{i,r}$ this proves that $\mathrm{Ind}M$ is self-dual. Restriction commutes with $D$ because $\psi$ fixes the defining block idempotent, so the maximal FIRST-block restriction of the normalized $S_b$ is exactly the normalized $L(i^r)\boxtimes S_a$ with no residual shift: that tensor is $D$-self-dual and any extra shift would contradict finite support. [step 2.1, F2, algebra]

4.1 (Leading coefficient $1$.) Use the exact tensor/Res adjunction of [[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]] and the maximal-tail lemma [F1] to compute $\operatorname{Hom}(\mathrm{Ind}(P_{i,r}\boxtimes P_a),S_c)$: it vanishes if $\epsilon_i^L(S_c)<r$; if $\epsilon_i^L(S_c)=r$, the maximal restriction is $L(i^r)\boxtimes S_{a'}$ and the Hom is zero unless $a'=a$, when it is exactly $k$ in degree $0$; the unique-head lemma makes $c=b$ in that case. Since Hom from a projective detects the multiplicity polynomial of each summand in the decomposition, the induced projective has exactly $[P_b]$ with coefficient $1$ at tail $r$ and all other summands at strictly higher tail, giving the displayed expansion. Self-duality of the induction and of each normalized projective forces every multiplicity polynomial to be bar invariant, and finite decompositions give nonnegative coefficients. [step 3.1, F1, F2, algebra]

5.1 (Integral string ideals.) For every $n$, induction with a divided block of length $r\ge n$ has no summands of tail $<n$ by the same Hom computation of step 4.1, so $\gamma(I_{(i,\ge n)})$ is contained in the span of the corresponding covers. Conversely descend on the finite possible tail $r$ (bounded by $\beta_i$): the coefficient-$1$ expansion expresses every $[P_b]$ of tail $r$ as $[P_{i,r}][P_a]$ minus classes of strictly higher tail, which lie in $I_{(i,\ge r)}$ already; this proves the reverse inclusion integrally, using the sum of all divided images and not a Gaussian-unit identification with a single ordinary power ideal. [step 4.1, F3, algebra]

6.1 (Signs.) Suppose $[P_b]=\gamma(\mathrm{sign}_b\,G(b'))$ has been established by a separate norm/geometric argument. The ideal equality of step 5.1 and the adapted LEFT-string lower-global basis [F4] identify the tail partitions of these signed vectors with the LEFT string partitions; at the exact LEFT-string quotient the lower-global recursion has coefficient $+1$ for $F_i^{(r)}G(a')$ when $a'$ has LEFT string $0$. Induction on root height fixes $\mathrm{sign}_a=+1$, and comparing the projective coefficient-$1$ expansion with this quotient fixes $\mathrm{sign}_b=+1$; the unit/vacuum starts the induction. The reversal supplier used elsewhere promises only signed star preservation, so an unsigned right recursion is deliberately not inferred here. The Axiom of Choice enters only through the inherited quantum-half/global suppliers [F4] and [[thm-klr-categorification-of-the-negative-quantum-half]] ([[def-axiom-of-choice]]); no additional simultaneous module-basis choice is used, and the finite duality, parity, Frobenius and first-block multiplicity arguments above are choice-free. [step 5.1, F3, F4, algebra] ∎
