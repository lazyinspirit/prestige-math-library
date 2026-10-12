exec(open(__file__.replace('kam-consumers.py','repair.py')).read().split("step('lem-cm-lattice")[0])
import shutil
for id in ['pthm-cm16-two-rotor-kam','ex-cm16-two-rotor-kam-units-check','rem-cm16-scope-of-stability-and-chaos']:
 shutil.copyfile(ROOT/'items'/(id+'.md'),Path(__file__).parent/'before/items'/(id+'.md'))
for id in ['thm-positive-measure-analytic-kam-family','lem-nondegenerate-frequency-reduction-and-alpha-square-smallness']:
 replace(id,r"an open neighbourhood $\Omega'\supseteq\Omega$",r"a conjugation-invariant open complex neighbourhood $\Omega'\subseteq\mathbb C^n$ containing $\Omega$")
 replace(id,r'$b(\Omega)+B_{r_0}\subseteq K$',r'$b(\Omega)+(B_{r_0}\cap\mathbb R^n)\subseteq K$')
replace('lem-nondegenerate-frequency-reduction-and-alpha-square-smallness',r'whenever $O_{h_0\prime}(\Omega)\subseteq\Omega\prime$',r'whenever $O_{h_0\prime}(\Omega)\subseteq\Omega\prime$') if False else None
replace('lem-nondegenerate-frequency-reduction-and-alpha-square-smallness',r"whenever $O_{h_0'}(\Omega)\subseteq\Omega'$",r"whenever $O_{h_0'}(\Omega)\subseteq\Omega'$ and $b(O_{h_0'}(\Omega))+B_r\subseteq\{J:\operatorname{dist}_\infty(J,K)<2r_0\}$")
replace('thm-positive-measure-analytic-kam-family','c=c(n,\\tau,s_0,\\sigma_0,r_0,M_2,U,K,\\Omega)','c=c(n,\\tau,s_0,\\sigma_0,r_0,M_2,U,K,\\Omega,h,b,C^*)')
replace('thm-positive-measure-analytic-kam-family',r"(with $h_0'$ chosen below the distance of $\overline{C^*}$ from $\partial\Omega$)",r"(choose $h_0'>0$ sufficiently small that $O_{h_0'}(\Omega_{\alpha,\tau})\subseteq\Omega'$ and $b(O_{h_0'}(\Omega_{\alpha,\tau}))+B_r$ lies in the complex $2r_0$-tube around $K$: $b(\overline{C^*})\subseteq K$, so continuity on a compact complex neighbourhood of $\overline{C^*}$ gives $\operatorname{dist}_\infty(b(\nu),K)<r_0$ near it; $r\le r_0$ then gives the required containment)")
replace('lem-frequency-reparametrization-by-contraction',r'then $|\nu_1-\nu_2|=|v(\nu_2)-v(\nu_1)|',r'then each lies in $K$ because $|\nu_i-\nu_+|=|v(\nu_i)|\le B\le2B$; their connecting segment lies in the convex ball $K$, so $|\nu_1-\nu_2|=|v(\nu_2)-v(\nu_1)|')
replace('lem-cauchy-fourier-and-lattice-shell-bounds',r'$u$ is holomorphic on the disc $D(0,s)\supseteq$ the vertical strip $|\mathrm{Im}\,\zeta|<s$',r'$u$ is holomorphic on the horizontal strip $|\mathrm{Im}\,\zeta|<s$')
replace('lem-cauchy-fourier-and-lattice-shell-bounds',r'By step 2.1 with $\delta=\sigma$ and $|e^{ik\cdot\vartheta}|\le e^{(s-2\sigma)|k|_1}$',r'By step 2.1 with $\delta=\sigma$ and $|e^{ik\cdot\vartheta}|\le e^{(s-2\sigma)|k|_1}$') if False else None
replace('lem-cauchy-fourier-and-lattice-shell-bounds','which is the first bound. For the second','which is the first bound. For the second') if False else None
replace('lem-cauchy-fourier-and-lattice-shell-bounds','which is proved in steps 4.1 and 6.1 below independently of this step','which was proved in step 2.3')
replace('lem-cauchy-fourier-and-lattice-shell-bounds',r'the coefficient bound of step 2.1 with $\delta=\sigma$ gives',r'letting the contour-shift margin $\delta\downarrow0$ in step 2.1 gives $|g_k|\le M e^{-s|k|_1}$, so')
replace('lem-cauchy-fourier-and-lattice-shell-bounds',r'\le M\sum_{|k|_1>K}e^{-\sigma|k|_1} \le M e^{-\sigma K}',r'\le M\sum_{|k|_1>K}e^{-2\sigma|k|_1} \le M e^{-\sigma K}')
replace('pthm-cm16-two-rotor-kam','Adopt the **two-rotor model**:',r'Assume the Axiom of Countable Choice ([[def-countable-choice]]), inherited from the analytic KAM suppliers. Adopt the **two-rotor model**:')
replace('pthm-cm16-two-rotor-kam','deps: [','deps: [def-countable-choice, ',)
replace('pthm-cm16-two-rotor-kam','dependency_roles:\n','dependency_roles:\n  def-countable-choice: mathematical-premise\n')
replace('pthm-cm16-two-rotor-kam',r"$\Omega':=\{\nu:|\nu|_\infty<\tfrac14\}$",r"$\Omega':=\{\nu\in\mathbb C^2:|\nu|_\infty<\tfrac14\}$") if False else None
replace('pthm-cm16-two-rotor-kam',r"$\Omega':=\{\nu:\lvert\nu\rvert_\infty<\tfrac14\}$",r"$\Omega':=\{\nu\in\mathbb C^2:\lvert\nu\rvert_\infty<\tfrac14\}$")
replace('pthm-cm16-two-rotor-kam',r'$b(\Omega)+B_{r_0}\subseteq K$',r'$b(\Omega)+(B_{r_0}\cap\mathbb R^2)\subseteq K$')
replace('pthm-cm16-two-rotor-kam',r'$I^{\mathsf T}D^2h(J)I=\lvert I\rvert_2^2\le2\lvert I\rvert_\infty^2$',r'$|I^{\mathsf T}D^2h(J)I|=|I_1^2+I_2^2|\le|I_1|^2+|I_2|^2\le2\lvert I\rvert_\infty^2$')
replace('pthm-cm16-two-rotor-kam',r'$\dot\Pi_i=-E_0\varepsilon\sin\theta_i\cos\theta_{3-i}=-\partial_{\theta_i}U_{\mathrm{phys}}$',r'$\dot\Pi_i=E_0\varepsilon\sin\theta_i\cos\theta_{3-i}=-\partial_{\theta_i}U_{\mathrm{phys}}$')
old=r'''consequently the model's motions on the torus are, in the lifted angles,
   $\vartheta(s)=\vartheta(0)+\nu s$, and the physical angles evolve as
   $\theta(t)=\theta(0)+\omega_0\,\nu\,t$: the torus carries quasi-periodic
   motion with angular frequencies $\omega_0\nu_1,\omega_0\nu_2$.'''
new=r'''consequently a torus parameter phase follows $\varphi(s)=\varphi_0+\nu s$,
   and its dimensionless phase-space trajectory is $\widehat\Psi_\nu(\varphi_0+\nu s)$.
   At physical time $t$ it is the scaled image of
   $\widehat\Psi_\nu(\varphi_0+\omega_0\nu t)$: the physical angle is the
   angular component of this embedding, not generally the linear parameter phase.
   Thus the torus carries quasi-periodic motion with fundamental angular
   frequencies $\omega_0\nu_1,\omega_0\nu_2$.'''
replace('pthm-cm16-two-rotor-kam',old,new)
replace('pthm-cm16-two-rotor-kam',r'on which the physical angles evolve as $\theta(t)=\theta(0)+\omega_0\nu t$',r'whose physical trajectory is the scaled embedding evaluated at parameter phase $\varphi_0+\omega_0\nu t$')
replace('ex-cm16-two-rotor-kam-units-check',r'$\dot\Pi_i=-E_0\varepsilon\sin\theta_i\cos\theta_{3-i}$',r'$\dot\Pi_i=E_0\varepsilon\sin\theta_i\cos\theta_{3-i}$')
replace('ex-cm16-two-rotor-kam-units-check',r'$\dot\Pi_i=-E_0\varepsilon\sin\theta_i\cos\theta_{3-i}$',r'$\dot\Pi_i=E_0\varepsilon\sin\theta_i\cos\theta_{3-i}$')
replace('ex-cm16-two-rotor-kam-units-check',r'$t_0^{-1}J_0I_i\prime=-E_0\varepsilon\sin\theta_i\cos\theta_{3-i}$',r'$t_0^{-1}J_0I_i\prime=E_0\varepsilon\sin\theta_i\cos\theta_{3-i}$') if False else None
replace('ex-cm16-two-rotor-kam-units-check',r"$t_0^{-1}J_0I_i'=-E_0\varepsilon\sin\theta_i\cos\theta_{3-i}$",r"$t_0^{-1}J_0I_i'=E_0\varepsilon\sin\theta_i\cos\theta_{3-i}$")
replace('ex-cm16-two-rotor-kam-units-check',r"$I_i'=-\varepsilon\sin\theta_i\cos\theta_{3-i}$",r"$I_i'=\varepsilon\sin\theta_i\cos\theta_{3-i}$")
replace('ex-cm16-two-rotor-kam-units-check',r'$-\varepsilon\cos\vartheta_1\cos\vartheta_2$',r'$\varepsilon\cos\vartheta_1\cos\vartheta_2$')
replace('ex-cm16-two-rotor-kam-units-check',r'$J_0/t_0=1\ \mathrm{J\,s^{-1}}$',r'$J_0/t_0=1\ \mathrm J$')
replace('ex-cm16-two-rotor-kam-units-check',r'$\theta(t)=\theta(0)+\omega_0\nu t$',r'$\varphi(t)=\varphi_0+\omega_0\nu t$ in its torus parameter, with the physical angle given by the embedding')
replace('ex-cm16-two-rotor-kam-units-check',r'$\theta(t)=\theta(0)+\omega_0\nu t$',r'$\varphi(t)=\varphi_0+\omega_0\nu t$ in its torus parameter; the physical angle is its embedded angular component')
replace('ex-cm16-two-rotor-kam-units-check','**Declared model data.**',r'Assume the Axiom of Countable Choice ([[def-countable-choice]]), as in the cited two-rotor KAM theorem.'+'\n\n'+'**Declared model data.**')
replace('ex-cm16-two-rotor-kam-units-check','deps: [','deps: [def-countable-choice, ')
replace('ex-cm16-two-rotor-kam-units-check','dependency_roles:\n','dependency_roles:\n  def-countable-choice: mathematical-premise\n')
replace('rem-cm16-scope-of-stability-and-chaos','All other statements of the page are choice-free:',r'The KAM theorem also assumes Countable Choice, inherited from its analytic and measure-theoretic suppliers. The other statements of the page are choice-free:')
