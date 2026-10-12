from pathlib import Path
changed=[]
def fix(id,pairs):
 p=Path('items',id+'.md');s=p.read_text()
 for a,b in pairs:
  assert a in s,(id,a);s=s.replace(a,b)
 p.write_text(s);changed.append(id)
fix('thm-cm-energy-stability-of-a-strict-minimum',[
 ('every solution $(q,v)$ with','every maximal solution $(q,v)$ with'),
 ('Therefore every solution starting','Therefore every maximal solution starting'),
 ('Fix $\\varepsilon>0$ with $\\overline B((q_0,0),\\varepsilon)\\subseteq\\Omega\\times\\mathbb R^n$ and shrink $\\varepsilon$ if necessary so that $\\varepsilon<r_0$;', 'Fix an admissible test radius $\\varepsilon_{\\mathrm{test}}>0$ and choose $0<\\varepsilon\\le\\varepsilon_{\\mathrm{test}}$ with $\\varepsilon<r_0$ and $\\overline B((q_0,0),\\varepsilon)\\subseteq\\Omega\\times\\mathbb R^n$;'),
 ('since $\\varepsilon$ was an arbitrary admissible radius','the resulting bound is also $<\\varepsilon_{\\mathrm{test}}$, and since $\\varepsilon_{\\mathrm{test}}$ was arbitrary')])
fix('thm-cm-exponential-stability-by-a-lyapunov-quadratic-form',[
 ('every solution $z$ of','every maximal solution $z$ of'),
 ('5.1 A solution with','5.1 A maximal solution with'),
 ('with $\\gamma:=\\frac{1}{2\\lambda_{\\max}(Q)}>0$', 'with $\\gamma_V:=\\frac{1}{2\\lambda_{\\max}(Q)}>0$'),
 ('-\\gamma V(z(t))','-\\gamma_V V(z(t))'),
 ('e^{\\gamma t}V(z(t))','e^{\\gamma_V t}V(z(t))'),
 ('e^{-\\gamma t}V(z(0))','e^{-\\gamma_V t}V(z(0))'),
 ('e^{-\\gamma t/2}\\|z(0)\\|_2','e^{-\\gamma_V t/2}\\|z(0)\\|_2'),
 ('then every solution with','then every maximal solution with'),
 ('This proves the exponential bound,','With $\\gamma:=\\gamma_V/2>0$ this proves the exponential bound,')])
fix('thm-cm-instability-of-a-hyperbolic-saddle',[
 ('M:=\\sqrt2\\,\\max(\\|Q_u\\|\\|\\Pi_u\\|_2,\\|Q_s\\|\\|\\Pi_s\\|_2)>0', 'M:=\\|Q_u\\|\\|\\Pi_u\\|_2^2+\\|Q_s\\|\\|\\Pi_s\\|_2^2>0'),
 ('the two scalar-product terms are estimated by Cauchy-Schwarz and $\\|u\\|_2+\\|s\\|_2\\le\\sqrt2\\,\\|z\\|_2$', 'the two scalar-product terms are estimated by Cauchy-Schwarz and $\\|u\\|_2\\le\\|\\Pi_u\\|_2\\|z\\|_2$, $\\|s\\|_2\\le\\|\\Pi_s\\|_2\\|z\\|_2$; no orthogonality of the splitting is assumed'),
 ('\\lambda_{\\max}(Q_u)\\varepsilon_0^2','\\lambda_{\\max}(Q_u)\\|\\Pi_u\\|_2^2\\varepsilon_0^2')])
fix('cex-cm-nonhyperbolic-equilibria-defeat-exponential-conclusions',[
 ('every solution with $|x(0)|<\\delta$','every maximal solution with $|x(0)|<\\delta$'),
 ('all solutions with $|x(0)|<\\delta$','all maximal solutions with $|x(0)|<\\delta$')])
fix('pthm-cm04-conservative-motion-and-energy',[
 ('on the open set $Q\\times\\mathbb R$ by [L2]', 'on the open time-state domain $I_0\\times Q\\times\\mathbb R$ by [L2]'),
 ('the maximal interval is contained in the time domain $\\mathbb R$ of $G_{F}$ and therefore in $I_{0}$','the maximal interval is contained in the time projection $I_0$ of this domain')])
fix('pthm-cm04-equilibrium-stability-at-a-strict-minimum',[
 ('such that every motion $x$ of the\n   model with','such that the unique maximal solution of the autonomous phase equation through the datum of every motion $x$ of the\n   model with'),
 ('for some\n   $t_{0}\\in I_{0}$ is defined','for some\n   $t_{0}\\in I_{0}$ is defined'),
 ('The norm is the Euclidean norm on', 'Here $x$ in the displayed all-time bound denotes that maximal extension; on the original motion interval it agrees with the given motion. The autonomous equation is read on $\\mathbb R\\times Q\\times\\mathbb R$, even when the declared time window $I_0$ is smaller; no enlargement of that declared window is asserted. The norm is the Euclidean norm on'),
 ('such that every solution $(q,v)$ with','such that every maximal solution $(q,v)$ with'),
 ('such that every solution $(q,v)$ of','such that every maximal solution $(q,v)$ of'),
 ('by step 1.1 and the defining property of $\\delta$ it is defined', 'it has a unique maximal extension for this unrestricted autonomous equation by [L2], and by step 1.1 and the defining property of $\\delta$ that extension is defined'),
 ('Translating back, $J$ contains $[t_{0},\\infty)$ and','Translating the maximal extension back yields a curve defined on $[t_{0},\\infty)$ which agrees with $x$ on $J$, and')])
fix('pthm-cm04-damped-decay-and-stability',[
 ('2. **Convergence.** For every motion,','2. **Convergence.** For every maximal motion,'),
 ('motion with $\\lVert(x(t_{0}),x\'(t_{0}))\\rVert_{2}<\\delta$', 'maximal motion with $\\lVert(x(t_{0}),x\'(t_{0}))\\rVert_{2}<\\delta$'),
 ('every motion satisfies $\\lVert','every maximal motion satisfies $\\lVert'),
 ('and every motion is defined on all of $\\mathbb R$','and every maximal motion is defined on all of $\\mathbb R$; arbitrary local motions are its restrictions'),
 ('D:=\\lambda_{+}-\\lambda_{-}=\\sqrt\\Delta>0','D:=\\lambda_{+}-\\lambda_{-}=\\sqrt\\Delta/m>0'),
 ('If a motion satisfies $r_{0}','If a maximal motion satisfies $r_{0}'),
 ('for every motion, so every motion tends','for every maximal motion, so every maximal motion tends'),
 ('in every case the\n  decay is exponential with rate at least $\\min(\\lvert\\lambda_{+}\\rvert,\n  \\lvert\\lambda\\rvert,\\gamma)>0$, uniformly for data of bounded phase norm.', 'the overdamped case has rate $|\\lambda_+|$, the underdamped case rate $\\gamma$, and the critical case has a polynomial factor multiplying $e^{\\lambda t}$. In that critical case the proof bounds this factor by an exponential with rate $|\\lambda|/2$; these rates are positive and the bounds are uniform for data of bounded phase norm.')])
fix('pthm-cm04-harmonic-motion',[
 ('=-\\sin\\theta_{1}=\\lvert s\\rvert=s','=-\\sin\\theta_{1}=-\\lvert s\\rvert=s'),
 ('2. **Amplitude and phase.** With','All claims involving every real time, periods or the whole phase ellipse below refer to the unique maximal extension of clause 1; on a local motion interval the same formulas hold by restriction.\n\n2. **Amplitude and phase.** With')])
fix('pthm-cm04-resonance-and-boundedness',[
 ('Then:\n\n1.', 'All all-time boundedness, convergence and unboundedness claims below refer to maximal motions on $\\mathbb R$; local motions are their restrictions as in clause 2. Then:\n\n1.'),
 ('has the following shape: if','has the following shape when $f_0\\ne0$: if'),
 ('if $c^{2}\\ge2mk$ it is strictly decreasing on $(0,\\infty)$.','if $c^{2}\\ge2mk$ it is strictly decreasing on $(0,\\infty)$. For $f_0=0$ the amplitude is identically zero.'),
 ('with the failure of clause 5 in the exceptional case.', 'and also at undamped resonance when $f_0=0$; for a nonzero drive clause 5 gives unboundedness at undamped resonance.'),
 ('hold exactly for $c>0$, and for $c=0$ away from $\\Omega=\\omega_{0}$,', 'hold for $c>0$, and for $c=0$ away from $\\Omega=\\omega_{0}$,'),
 ('[L6] [[prop-cm-oscillator-amplitude-maximum]]: for $c>0$', '[L6] [[prop-cm-oscillator-amplitude-maximum]]: for $c>0$ and $f_0\\ne0$'),
 ('1.3 Clause 3, amplitude shape. By [L6] applied to the amplitude function $A$ of clause 1.', '1.3 Clause 3, amplitude shape. For $f_0\\ne0$ use [L6] on the amplitude function $A$ of clause 1; for $f_0=0$, the strictly positive denominator for $c>0$ gives $A(\\Omega)=0$ for every $\\Omega$ directly.'),
 ('clauses 4 and 5 then give boundedness away from $\\Omega=\\omega_{0}$ and unboundedness at it.', 'clauses 4 and 5 give boundedness away from $\\Omega=\\omega_{0}$ and unboundedness at it when $f_0\\ne0$. If $f_0=0$ the equation is homogeneous, so the harmonic classification [L5] gives boundedness also at that frequency.'),
 ('A(\\omega_{0})/A(0)=m\\omega_{0}/c=1/(2\\gamma)', 'A(\\omega_{0})/A(0)=m\\omega_{0}/c=\\omega_0/(2\\gamma)'),
 ('for $c>0$ and readouts','for $c>0$, $f_0\\ne0$ and readouts')])
fix('pthm-cm09-linearization-at-a-strict-minimum', [('such that every solution of $z\'=G(z)$','such that every maximal solution of $z\'=G(z)$')])
fix('pthm-cm09-free-modes-and-degeneracy', [('every solution with $\\lVert z(0)\\rVert','every maximal solution with $\\lVert z(0)\\rVert')])
fix('pthm-cm11-euler-equations', [('I_0-b','I_0+b')])
fix('pthm-cm11-principal-rotations', [
 ('in the latter case\n   $\\omega_{0}=\\Omega e_{j}$ for some $j$ and $\\Omega\\neq0$, and the\n   conclusions of clauses 2 and 3 hold for it.', 'in the latter case an orthonormal principal basis can be chosen with one vector $e_j=\\omega_0/\\|\\omega_0\\|_2$ and $\\Omega=\\|\\omega_0\\|_2\\ne0$, and the conclusions of clauses 2 and 3 hold in that adapted basis. It can be made positively oriented by negating a different basis vector. No alignment with the initially fixed basis is asserted when eigenvalues repeat.'),
 ('so $\\omega_{0}$ is an eigenvector of $I$ and lies along a principal axis of the basis of [pthm-cm10-principal-axes] clause (a), say $\\omega_{0}=\\Omega e_{j}$ with $\\Omega\\neq0$;', 'so $\\omega_{0}$ is an eigenvector of $I$. Within its eigenspace choose the unit vector $e_j=\\omega_0/\\|\\omega_0\\|_2$ and complete it to an orthonormal basis of that eigenspace; retain orthonormal bases of the other eigenspaces. The spectral theorem underlying [L1] gives the orthogonal eigenspace decomposition, and finite Gram–Schmidt completion supplies such a principal basis. Negating one of the other two basis vectors if necessary makes it positively oriented. In this adapted basis $\\omega_0=\\Omega e_j$, $\\Omega=\\|\\omega_0\\|_2\\ne0$, without a simple-spectrum hypothesis;')])
Path('research/physics-cm-qm-gr-79-2026-10-11-stability-consumer-successor/changed-items.json').write_text(__import__('json').dumps(changed,indent=2)+'\n')
print(changed)
