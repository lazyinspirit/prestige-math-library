# Singlet basis-phase correction (research only)

Replace proof step 1.2 by:

1.2 Fix unit $a$ and choose an orthonormal eigenbasis $(u_+,u_-)$ of $a\cdot\sigma$, with eigenvalues $+1,-1$. Write its two columns in the fixed basis $(e_+,e_-)$ as the unitary matrix $W$ and set $\delta=\det W$. Expanding the two elementary tensors gives $\kappa(u_+\otimes u_-)-\kappa(u_-\otimes u_+)=\delta[\kappa(e_+\otimes e_-)-\kappa(e_-\otimes e_+)]$. Orthonormality gives $|\delta|^2=\|u_+\|^2\|u_-\|^2-|\langle u_+,u_-\rangle|^2=1$, by direct two-coordinate expansion. Thus with $\eta=\delta^{-1}$, the fixed vector is $\Psi=\eta[\kappa(u_+\otimes u_-)-\kappa(u_-\otimes u_+)]/\sqrt2$, where $|\eta|=1$. For unit $b$ use $P_{b,\pm}=(I\pm b\cdot\sigma)/2$ from [F2]. This phase changes no projection norm or probability. [given, F1, F2, F3, algebra]

Replace proof step 2.1 by:

2.1 By step 1.2, $(P_{a,+}\otimes P_{b,+})\Psi=\eta\kappa(u_+\otimes P_{b,+}u_-)/\sqrt2$. Since $|\eta|=1$, [F5] and [F2] give $p(+,+)=\|P_{b,+}u_-\|^2/2=[1+\langle(b\cdot\sigma)u_-,u_-\rangle]/4$. The Pauli identities [F1] give $(a\cdot\sigma)(b\cdot\sigma)+(b\cdot\sigma)(a\cdot\sigma)=2(a\cdot b)I$. Pairing this identity against $u_-$ and using self-adjointness and $(a\cdot\sigma)u_-=-u_-$ gives $\langle(b\cdot\sigma)u_-,u_-\rangle=-a\cdot b$; the same calculation for $u_+$ gives $+a\cdot b$. Applying the other three projection pairs therefore gives $p(+,+)=p(-,-)=(1-a\cdot b)/4=\sin^2(\theta/2)/2$ and $p(+,-)=p(-,+)=(1+a\cdot b)/4=\cos^2(\theta/2)/2$, where $\cos\theta=a\cdot b$. These nonnegative numbers sum to one, proving the unchanged clause (b). [given, F1, F2, F3, F5, step 1.2, algebra]

The original full Statement, empirical scope, both perfect-correlation branches and all setting-independent marginals are unchanged. This is proof-only. No actual production/readiness/integration or repair round is performed. At native55 drain compare current final bytes and supplier assumptions before adopting. The lead retains all consumer duties; this draft does not certify the entire supplier cone.
